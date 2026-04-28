// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sebastian Rios | Portfolio",
  description: "Desarrollador Web Junior Backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>
        <header>
          <nav id="navbar">
            <div className="logo">Esteban Sebastian <samp>Rios</samp></div>
            <ul className="nav-links">
              <li><Link href="/">Inicio</Link></li>
              
              <li><a href="#experiencia">Experiencia</a></li> 
              <li><Link href="/proyectos">Proyectos</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <div className="footer-content">
            <p>&copy; 2025 Sebastian Rios</p>
            <div className="social-links">
              <a href="https://github.com/RiosSebastian" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/sebastian-rios-83b699275/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}