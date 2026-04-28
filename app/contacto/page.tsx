// src/app/contacto/page.tsx

export default function ContactoPage() {
  // Datos estáticos que se pueden modificar a mano
  const infoContacto = [
    { title: "Email principal", value: "riossebastian790@gmail.com", icon: "fas fa-envelope", link: "mailto:riossebastian790@gmail.com" },
    { title: "Teléfono", value: "+54 9 3437 522967", icon: "fas fa-phone", link: "tel:+5493437522967"},
    { title: "LinkedIn", value: "linkedin.com/in/sebastian-rios", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/sebastian-rios-83b699275/" },
    { title: "Instagram", value: "sebastianrios_07", icon: "fab fa-instagram", link: "https://www.instagram.com/sebastianrios_07/" },
    { title: "Email alternativo", value: "seba2001rios@gmail.com", icon: "fas fa-envelope-open-text", link: "mailto:sebastianrios.dev@gmail.com" },
  ];

  return (
    <main>
      <section>
        <h2 className="section-title">Contacto</h2>
        
        <div className="projects-container">
          {infoContacto.map((item, index) => (
            <div className="project-card" key={index}>
              <div className="project-info">
                <h3>
                  <i className={`${item.icon} mr-2`}></i> {/* replicando el icono en el H3 */}
                  {item.title}
                </h3>
                <p>
                  {item.link !== "#" ? (
                    <a href={item.link} target={item.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}