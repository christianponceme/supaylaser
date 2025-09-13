
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-800 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Política de Privacidad</h1>
        
        <div className="space-y-6 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">1. Introducción</h2>
            <p>
              En Supay Laser, respetamos su privacidad y estamos comprometidos a proteger su información personal. 
              Esta política de privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información 
              cuando visita nuestro sitio web y utiliza nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">2. Información que Recopilamos</h2>
            <p>
              Podemos recopilar información personal que usted nos proporciona voluntariamente, como:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li><strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono.</li>
              <li><strong>Información de cotización:</strong> Detalles y archivos relacionados con los proyectos para los que solicita una cotización.</li>
              <li><strong>Comunicaciones:</strong> Cualquier comunicación que nos envíe por correo electrónico o a través de formularios de contacto.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">3. Cómo Usamos su Información</h2>
            <p>
              La información que recopilamos se utiliza para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Para proporcionar y gestionar nuestros servicios de corte y grabado láser.</li>
              <li>Para comunicarnos con usted, responder a sus consultas y enviarle cotizaciones.</li>
              <li>Para procesar sus pedidos y pagos.</li>
              <li>Para mejorar nuestro sitio web y servicios.</li>
              <li>Para cumplir con nuestras obligaciones legales y regulatorias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">4. Divulgación de su Información</h2>
            <p>
              No vendemos, intercambiamos ni transferimos de ninguna otra manera su información personal a terceros 
              sin su consentimiento, excepto en los siguientes casos:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>A proveedores de servicios de confianza que nos asisten en la operación de nuestro negocio, siempre que acepten mantener esta información confidencial.</li>
              <li>Cuando sea requerido por ley o para proteger nuestros derechos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">5. Seguridad de la Información</h2>
            <p>
              Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. 
              Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro, 
              por lo que no podemos garantizar su seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">6. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, corregir o eliminar su información personal que poseemos. Para ejercer 
              estos derechos, por favor contáctenos utilizando la información de contacto a continuación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">7. Cambios a esta Política</h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las 
              modificaciones se publicarán en esta página y la fecha de la última actualización se revisará en la parte inferior.
            </p>
          </section>

          <p className="mt-8">
            Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos en: 
            <a href="mailto:info@supaylaser.com" className="text-yellow-600 hover:underline">info@supaylaser.com</a>.
          </p>
          <p><strong>Última actualización:</strong> 4 de Septiembre de 2025</p>
        </div>
      </div>
    </div>
  );
}
