'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { 
  faVk, 
  faTelegram, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { api } from '@/lib/api';
import { ContactInfo } from '@/types/api';

export default function Footer() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.getContactInfo();
      if (response.data) {
        setContactInfo(response.data);
      }
    };

    loadData();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Контактная информация</h3>
            {contactInfo?.address && (
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{contactInfo.address}</span>
              </div>
            )}
            {contactInfo?.phone && (
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>{contactInfo.phone}</span>
              </div>
            )}
            {contactInfo?.email && (
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{contactInfo.email}</span>
              </div>
            )}
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