'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faInstagram,
  faTelegram,
  faVk,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { api } from '@/lib/api';
import { ContactInfo, SocialLink } from '@/types/api';

const SOCIAL_ICONS = {
  facebook: faFacebook,
  instagram: faInstagram,
  telegram: faTelegram,
  vk: faVk,
  youtube: faYoutube
};

export default function Footer() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [contactResponse, socialResponse] = await Promise.all([
        api.getContactInfo(),
        api.getSocialLinks()
      ]);

      if (contactResponse.data) {
        setContactInfo(contactResponse.data);
      }
      if (socialResponse.data) {
        setSocialLinks(socialResponse.data);
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
          {socialLinks.length > 0 && (
            <div className="footer-info">
              <h3>Мы в социальных сетях</h3>
              <div className="social-icons">
                {socialLinks.map(link => {
                  const icon = SOCIAL_ICONS[link.icon as keyof typeof SOCIAL_ICONS];
                  if (!icon) return null;
                  
                  return (
                    <a 
                      key={link.id} 
                      href={link.url} 
                      className="social-icon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={link.title}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Благотворительный фонд «Мухаджир». Все права защищены.
        </div>
      </div>
    </footer>
  );
} 