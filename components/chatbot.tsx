'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageCircle, Send, X } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const formatTime = (date: Date) => {
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

// Generate or retrieve sessionId from localStorage
const getSessionId = (): string => {
  if (typeof window === 'undefined') return ''

  let sessionId = localStorage.getItem('supay-laser-session-id')
  if (!sessionId) {
    // Fallback for browsers that don't support crypto.randomUUID()
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      sessionId = crypto.randomUUID()
    } else {
      // Generate a UUID-like string using Math.random()
      sessionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
    localStorage.setItem('supay-laser-session-id', sessionId)
  }
  return sessionId
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡¡Hola! 👋 Soy el asistente de Supay Laser 🔥.¿En qué puedo ayudarte hoy? 😊',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sessionId = getSessionId()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)
    
    try {
      // Send message to API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          message: text.trim()
        })
      })

      if (response.ok) {
        const data = await response.json()
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response || data.message || data.text || 'Gracias por tu mensaje. Te responderemos pronto.',
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-black hover:bg-gray-800 text-white rounded-full w-16 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse border border-gray-600"
        >
          <img
            src="/logo-supay-laser.png"
            alt="Supay Laser Logo"
            className="w-10 h-10 object-contain"
          />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">
      <Card className="w-80 bg-gradient-to-br from-gray-900 to-black border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-t-2xl h-14 px-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <CardTitle className="text-sm font-semibold">Chat Supay Laser</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0 text-black hover:bg-yellow-700 rounded-full transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-0 flex flex-col h-80">
          <ScrollArea className="flex-1 p-4 overflow-hidden">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex flex-col max-w-[85%]">
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm break-words whitespace-pre-wrap shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-br-md'
                          : 'bg-gray-800 text-white border border-gray-600 rounded-bl-md'
                      }`}
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                    >
                      {message.text}
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 px-2 ${
                      message.sender === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex flex-col max-w-[85%]">
                    <div className="bg-gray-800 text-white border border-gray-600 rounded-2xl rounded-bl-md px-4 py-3 text-sm shadow-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>
          <div className="flex-shrink-0 border-t border-gray-700">
            <form onSubmit={handleSubmit} className="p-4 flex items-center gap-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm h-10 rounded-full px-4 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black h-10 px-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
