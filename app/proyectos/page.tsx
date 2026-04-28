import Image from "next/image";


interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  imagenSrc: string; // Ruta relativa a la carpeta public
  tecnologias: string[];
  repoLink: string;
}


const DATOS_PROYECTOS: Proyecto[] = [
  {
    id: 1,
    nombre: "Bloc",
    descripcion: "API REST para red social inspirada en Instagram/Facebook. Autenticación JWT + Refresh Token en cookies HttpOnly, roles, publicaciones, comentarios e imágenes.",
    imagenSrc: "/imagenPro.png", 
    tecnologias: ["Java 17", "Spring Boot", "Spring Security", "MySQL"],
    repoLink: "https://github.com/RiosSebastian/Bloc.git", // Enlace al repositorio de GitHub
  },
  {
    id: 2,
    nombre: "Préstamos a PYMES",
    descripcion: "Plataforma de onboarding crediticio para PYMES con carga de documentos, firma digital y panel admin.",
    imagenSrc: "/imagenPro2.png",
    tecnologias: ["Java", "Spring", "MySQL"],
    repoLink: "https://github.com/RiosSebastian/onboarding-creditos-pymes.git",
  },
  {
    id: 3,
    nombre: "Web de Música",
    descripcion: "API REST inspirada en Spotify para administrar usuarios, artistas, álbumes, canciones y playlists.",
    imagenSrc: "/imagenPro.png", 
    tecnologias: ["Java", "Spring", "MySQL"],
    repoLink: "https://github.com/RiosSebastian/Web_Musica.git",
  }
];

export default function ProyectosPage() {
  return (
    <main>
      <section className="projects">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="projects-container">
          {DATOS_PROYECTOS.map((proyecto) => (
            
            <div className="project-card" key={proyecto.id}>
              <div className="project-img">
                {/* Usamos Image de Next.js para optimización, LayoutCSS se encarga del estilo */}
                <Image 
                  src={proyecto.imagenSrc} 
                  alt={proyecto.nombre}
                  width={400} // Ancho sugerido para la card
                  height={250} // Alto sugerido para la card
                  className="img" 
                />
              </div>
              <div className="project-info">
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                <div className="project-tech">
                  {proyecto.tecnologias.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={proyecto.repoLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-code"></i> Repositorio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}