import './contacto.css'

export default function Contacto() {
    return (
        <main className="contacto">
          <h1>Conectemos</h1>
          <p>
            Cada conversación es el inicio de una pieza única. Compartí tu visión y
            creemos juntos muebles que alimenten el alma de tu hogar.
          </p>
          <section id="contact-section">
            <div class="contact-form-container">
              <form id="contactForm" action="" method="" novalidate>
                <label for="NombreUsuario">Nombre:</label>
                <input type="text" id="NombreUsuario" name="nombre" />
                <span id="nombreError" class="error-message"></span>

                <label for="EmailUsuario">Email:</label>
                <input type="email" id="EmailUsuario" name="email" />
                <span id="emailError" class="error-message"></span>

                <label for="MensajeUsuario">Mensaje:</label>
                <textarea id="MensajeUsuario" name="mensaje" rows="5"></textarea>
                <span id="mensajeError" class="error-message"></span>

                <button type="submit">Enviar Mensaje</button>
              </form>
              <div id="successMessage" class="success-message">
                ¡Mensaje enviado con éxito! <br />
                Pronto nos pondremos en contacto contigo.
              </div>
            </div>

            <div class="contact-info-container">
              <h3>Contacto Digital</h3>
              <div class="info-item">
                <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <div class="info-text">
                  <strong>Email general:</strong><br />
                  <link to="mailto:info@hermanosjota.com.ar"
                    >info@hermanosjota.com.ar</link>
                </div>
              </div>

              <div class="info-item">
                <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <div class="info-text">
                  <strong>Ventas:</strong><br />
                  <link to="mailto:ventas@hermanosjota.com.ar"
                    >ventas@hermanosjota.com.ar</link>
                </div>
              </div>

              <div class="info-item">
                <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                <div class="info-text">
                  <strong>WhatsApp:</strong><br />
                  <link to="https://wa.me/5411456789000">+54 11 4567-8900</link>
                </div>
              </div>

              <div class="info-item">
                <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clip-rule="evenodd"/>
                </svg>
                <div class="info-text">
                  <strong>Sitio web:</strong><br />
                  <link to="https://www.hermanosjota.com.ar"
                    >www.hermanosjota.com.ar</link>
                </div>
              </div>

              <div class="info-item">
                <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="info-text">
                  <strong>Instagram:</strong><br />
                  <link to="https://instagram.com/hermanosjota_ba"
                    >@hermanosjota_ba</link>
                </div>
              </div>
            </div>
          </section>

          <section id="map-section">
            <div class="map-container">
              <h2>Visitanos en nuestro showroom</h2>
              <p>
                Te esperamos en San Cristóbal para que conozcas de cerca nuestro
                proceso artesanal y sientas la calidad de nuestros materiales.
                Nuestro showroom está abierto de lunes a viernes de 10:00 a 19:00 y
                los sábados de 10:00 a 14:00.
              </p>
              <div class="map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.217000325707!2d-58.4073485244753!3d-34.62395615856696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae2a0c04a2f%3A0x77f381af8f0ca1fa!2sAv.%20San%20Juan%202847%2C%20C1232AAK%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1756263438572!5m2!1ses-419!2sar"
                  width="100%"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
              </div>
            </div>
          </section>
        </main>
    )
}