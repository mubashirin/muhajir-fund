'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faWallet, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { 
  faVk, 
  faTelegram, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { ContactInfo } from '@/types/api';

export default function Footer() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/v1/fund/info', {
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch contact info: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Data:', data);
        
        if (data) {
          setContactInfo(data);
        } else {
          console.error('Invalid data structure:', data);
          setError('Неверный формат данных');
        }
      } catch (err) {
        console.error('Error fetching contact info:', err);
        setError(err instanceof Error ? err.message : 'Произошла ошибка');
      }
    };

    fetchContactInfo();
  }, []);

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'vk':
        return faVk;
      case 'telegram':
        return faTelegram;
      case 'instagram':
        return faInstagram;
      case 'youtube':
        return faYoutube;
      default:
        return null;
    }
  };

  const handleCopyAddress = async () => {
    if (contactInfo?.trc20_addresses && contactInfo.trc20_addresses.length > 0) {
      try {
        await navigator.clipboard.writeText(contactInfo.trc20_addresses[0].address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Сбросить состояние через 2 секунды
      } catch (err) {
        console.error('Failed to copy address:', err);
        // Можно добавить обработку ошибки копирования, например, показать сообщение пользователю
      }
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Контактная информация</h3>
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : contactInfo ? (
              <>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{contactInfo.email}</span>
                </div>
              </>
            ) : (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            )}
          </div>
          <div className="footer-info">
            <h3>Мы в социальных сетях</h3>
            <div className="social-icons">
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : contactInfo?.social_links ? (
                contactInfo.social_links.map((link) => {
                  const icon = getSocialIcon(link.platform);
                  if (!icon) return null;
                  
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${link.platform}`}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  );
                })
              ) : (
                <div className="animate-pulse space-y-3">
                  <div className="h-8 bg-gray-200 rounded w-8"></div>
                  <div className="h-8 bg-gray-200 rounded w-8"></div>
                  <div className="h-8 bg-gray-200 rounded w-8"></div>
                </div>
              )}
            </div>
          </div>
          <div className="footer-info trc20-address-block">
            <h3 className="text-center">Поддержи фонд (TRC20 USDT)</h3>
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : contactInfo?.trc20_addresses && contactInfo.trc20_addresses.length > 0 ? (
              <div 
                className="contact-item justify-center cursor-pointer hover:underline text-center"
                onClick={handleCopyAddress}
                title="Нажмите для копирования адреса"
              >
                <FontAwesomeIcon icon={copied ? faCheckCircle : faWallet} />
                <span>{contactInfo.trc20_addresses[0].address}</span>
              </div>
            ) : (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            )}
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Благотворительный фонд «Мухаджир». Все права защищены.
        </div>
      </div>
    </footer>
  );
} 