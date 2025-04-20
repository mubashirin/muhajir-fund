'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { 
  faVk, 
  faTelegram, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Контактная информация</h3>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>г. Москва, ул. Примерная, д. 1</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@muhajir.ru</span>
            </div>
          </div>
          <div className="footer-info">
            <h3>Мы в социальных сетях</h3>
            <div className="social-icons">
              <a 
                href="https://vk.com/muhajir" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Группа ВКонтакте"
              >
                <FontAwesomeIcon icon={faVk} />
              </a>
              <a 
                href="https://t.me/muhajir" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Telegram канал"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a 
                href="https://instagram.com/muhajir" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="https://youtube.com/muhajir" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                title="YouTube канал"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Благотворительный фонд «Мухаджир». Все права защищены.
        </div>
      </div>
    </footer>
  );
} 