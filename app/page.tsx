// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Esteban Sebastian Rios</h1>
            <h2>Desarrollador Web Junior</h2>
            <p>
              Me considero una persona sociable y abierta, lo que facilita mi
              integración en equipos de trabajo. Estoy constantemente
              buscando oportunidades para aprender y mejorar mis
              habilidades. Mi especialización se centra en el desarrollo web
              en la parte del backend. Poseo sólidos conocimientos en
              tecnologías y lenguajes como Java, Spring y diversas bases de
              datos relacionales.
            </p>
            <div className="social-links">
              <a href="https://github.com/RiosSebastian" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sebastian-rios-83b699275/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:riossebastian790@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <a href="/contacto" className="btn">Contáctame</a>
          </div>
          <div className="hero-image">
            
            <Image 
              src="/fotoDePerfil.jpg" 
              alt="Foto de Esteban Sebastian Rios"
              width={350} // Tamaño original en CSS
              height={350} // Tamaño original en CSS
              priority 
            />
          </div>
        </div>
      </section>

      <section id="experiencia" className="experiencia">
        <h2 className="section-title">Experiencia Laboral</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <samp className="date">30/09/2024 - 16/12/2024</samp>
              <h3>Backend Developer</h3>
              <h4>NoConty</h4>
              <p>
                Durante la Simulación Laboral, colaboré en el desarrollo de
                una plataforma web para un casino P2P. Mi rol incluyó la
                implementación de funcionalidades clave empleando Java y
                Spring, así como la gestión eficiente de bases de datos con
                PostgreSQL. Esta experiencia me permitió aplicar buenas
                prácticas de desarrollo backend, trabajar en equipo y
                desenvolverme en un entorno similar al profesional.
              </p>
              <ul className="skills">
                <li>Java</li>
                <li>Spring</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



       <section id="proyectos" className="projects">

            <h2 className="section-title">Proyectos Personales</h2>

            <div className="projects-container">
                <div className="project-card">
                    <div className="project-img">
                        <Image src="/imagenPro.png" alt="proyecto" width={400} height={250} />
                    </div>
                    <div className="project-info">
                        <h3>Bloc</h3>
                        <p>Backend API para una red social inspirada en Instagram/Facebook, desarrollada con Spring
                            Boot. Incluye autenticación segura con JWT y Refresh Token en cookies HttpOnly, sistema de
                            roles, gestión de publicaciones, comentarios y subida de imágenes. Proyecto enfocado en
                            buenas prácticas, seguridad y escalabilidad.</p>

                        <div className="project-tech">
                            <span>Java 17</span>
                            <span>Spring Boot</span>
                            <span>JPA</span>
                            <span>MySQL</span>
                        </div>

                        <div className="project-links">
                            <a href="#" className="project-link" target="_blank"><i className="fas fa-link"></i>Demo</a>
                            <a href="#" className="project-link" target="_blank"><i className="fas fa-code"></i> Repositorio</a>
                        </div>

                    </div>
                </div>


                <div className="project-card">
                    <div className="project-img">
                        <Image src="/imagenPro2.png" alt="proyecto 2" width={400} height={250} />
                    </div>
                    <div className="project-info">
                        <h3>Prestamos a Pymes</h3>
                        <p>Plataforma web de onboarding de créditos para PYMES. Permite a las pequeñas y medianas
                            empresas solicitar préstamos en línea, cargar documentos, firmar digitalmente y conocer en
                            tiempo real el estado de su solicitud. Incluye panel de administración para operadores con
                            filtros y gestión de tareas.</p>

                        <div className="project-tech">
                            <span>Java</span>
                            <span>Spring</span>
                            <span>MySQL</span>
                        </div>

                        <div className="project-links">
                            <a href="#" className="project-link" target="_blank"><i className="fas fa-link"></i>Demo</a>
                            <a href="#" className="project-link" target="_blank"><i className="fas fa-code"></i> Repositorio</a>
                        </div>

                    </div>
                </div>


                <div className="project-card">
                    <div className="project-img">
                        <Image src="/imagenPro.png" alt="proyecto 3" width={400} height={250} />
                    </div>
                    <div className="project-info">
                        <h3>Web de Musica</h3>
                        <p>API REST inspirada en Spotify para administrar usuarios, artistas, 
                            álbumes, canciones y playlists usando Spring Boot y Spring Security.</p>

                        <div className="project-tech">
                            <span>Java</span>
                            <span>Spring</span>
                            <span>MySQL</span>
                        </div>

                        <div className="project-links">
                            <a href="#" className="project-link" target="_blank"><i className="fas fa-link"></i>
                                Demo</a>
                            <a href="#" className="project-link" target="_blank"><i className="fas fa-code"></i> Repositorio</a>
                        </div>
                    </div>
              </div>
            </div>
        </section>
    </main>
  );
}