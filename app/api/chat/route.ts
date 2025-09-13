import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { sessionId, message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL
    const chatApiKey = process.env.CHAT_API_KEY

    if (!n8nWebhookUrl) {
      console.error('N8N_WEBHOOK_URL not configured')
      return NextResponse.json(
        { error: 'N8N webhook not configured. Revisa tu .env.local y asegúrate de que N8N_WEBHOOK_URL esté definido.' },
        { status: 500 }
      )
    }

    if (!chatApiKey) {
      console.error('CHAT_API_KEY not configured')
      return NextResponse.json(
        { error: 'CHAT_API_KEY no está configurada. Revisa tu .env.local.' },
        { status: 500 }
      )
    }

    let url: URL
    try {
      url = new URL(n8nWebhookUrl)
    } catch (e) {
      console.error('N8N_WEBHOOK_URL inválida:', n8nWebhookUrl)
      return NextResponse.json(
        { error: 'N8N_WEBHOOK_URL inválida. Revisa el formato de la URL.' },
        { status: 500 }
      )
    }

    url.searchParams.append('sessionId', sessionId || '')
    url.searchParams.append('message', message)
    url.searchParams.append('source', 'supay-laser-website')
    url.searchParams.append('userAgent', request.headers.get('user-agent') || '')
    url.searchParams.append('ip', request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '')
    url.searchParams.append('platform', 'web')

    try {
      const n8nResponse = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-api-key': chatApiKey,
        }
      })

      const responseText = await n8nResponse.text()

      if (n8nResponse.ok) {
        try {
          const n8nData = JSON.parse(responseText)
          let botResponse = n8nData.response || n8nData.message || n8nData.text || 'Gracias por tu mensaje. Te responderemos pronto.'
          
          return NextResponse.json({
            response: botResponse.trim(),
            success: true,
            source: 'n8n'
          })
        } catch (jsonError) {
          return NextResponse.json({
            response: responseText.trim() || 'Mensaje recibido correctamente.',
            success: true,
            source: 'n8n'
          })
        }
      } else {
        console.error(`n8n webhook error: ${n8nResponse.status} ${n8nResponse.statusText}`, responseText)
        return NextResponse.json({
          error: `Error al contactar el servicio de chat.`,
          details: responseText
        }, { status: n8nResponse.status })
      }
    } catch (fetchError) {
      console.error('Error calling n8n webhook:', fetchError)
      return NextResponse.json({
        error: 'No se pudo conectar con el servicio de chat.',
        details: String(fetchError)
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
    },
  })
}
