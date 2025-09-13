
export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-gray-800 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Términos de Servicio</h1>
        
        <div className="space-y-6 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de Supay Laser ("nosotros", "nuestro"), usted ("el cliente", "usuario") 
              acepta estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos 
              términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">2. Descripción del Servicio</h2>
            <p>
              Supay Laser se especializa en servicios de corte y grabado láser de alta precisión, incluyendo pero no 
              limitado a la creación de cuadros decorativos, letreros publicitarios y prototipos técnicos. Todos los 
              servicios están sujetos a la disponibilidad de materiales y capacidad de producción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">3. Cotizaciones y Pagos</h2>
            <p>
              Todas las cotizaciones son válidas por un período de 30 días. Los precios pueden estar sujetos a cambios 
              basados en la complejidad del diseño y el costo de los materiales. Se requerirá un pago por adelantado, 
              generalmente del 50%, para iniciar la producción. El saldo restante debe ser pagado antes de la entrega 
              o envío del producto final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">4. Diseños y Propiedad Intelectual</h2>
            <p>
              El cliente declara que posee todos los derechos de autor y propiedad intelectual de los diseños 
              proporcionados para el corte o grabado. Supay Laser no se hace responsable de ninguna infracción de 
              derechos de autor. Nos reservamos el derecho de rechazar cualquier diseño que consideremos ilegal, 
              ofensivo o que infrinja los derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">5. Producción y Tiempos de Entrega</h2>
            <p>
              Los tiempos de entrega son estimados y se comunicarán al momento de confirmar el pedido. Haremos todo 
              lo posible por cumplir con los plazos acordados, pero no nos hacemos responsables de retrasos debidos 
              a circunstancias fuera de nuestro control (por ejemplo, retrasos de proveedores, problemas de envío).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">6. Política de Calidad y Devoluciones</h2>
            <p>
              Nos comprometemos a entregar productos de alta calidad. Si el producto final tiene defectos de fabricación, 
              el cliente debe notificarlo en un plazo de 7 días tras la recepción para coordinar una posible reposición 
              o reparación. No se aceptan devoluciones para productos personalizados que no presenten defectos de fabricación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">7. Limitación de Responsabilidad</h2>
            <p>
              Nuestra responsabilidad se limita al valor del servicio prestado. No seremos responsables por daños 
              indirectos, incidentales o consecuentes que puedan surgir del uso de nuestros productos o servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">8. Modificaciones a los Términos</h2>
            <p>
              Supay Laser se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las 
              modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
            </p>
          </section>

          <p className="mt-8">
            Para cualquier pregunta sobre estos términos, por favor contáctenos a través de <a href="mailto:info@supaylaser.com" className="text-yellow-600 hover:underline">info@supaylaser.com</a>.
          </p>
          <p><strong>Última actualización:</strong> 4 de Septiembre de 2025</p>
        </div>
      </div>
    </div>
  );
}
