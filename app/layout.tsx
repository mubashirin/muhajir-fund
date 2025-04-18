import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faVk, faTelegram, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Благотворительный фонд Мухаджир",
  description: "Благотворительный фонд помощи нуждающимся",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className={inter.className}>
        <header>
          <div className="container">
            <div className="header-content">
              <Link href="/" className="logo-link">
                <img src="/logo.png" alt="Мухаджир" className="logo" />
              </Link>
              <nav className="nav-menu">
                <Link href="/">Главная</Link>
                <Link href="/contact">Контакты</Link>
              </nav>
            </div>
          </div>
        </header>

        {children}

        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-info">
                <h3>Контакты</h3>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>ул. Примерная, д. 123, г. Москва, 123456</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>info@example.com</span>
                </div>
              </div>
              
              <div className="footer-info">
                <h3>Мы в социальных сетях</h3>
                <div className="social-icons" style={{ justifyContent: 'flex-start' }}>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faVk} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="copyright">
              <p>&copy; 2025 Благотворительный фонд «Мухаджир»</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
