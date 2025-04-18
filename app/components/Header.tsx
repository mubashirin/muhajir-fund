'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo-link">
            <img src="/logo.png" alt="Мухаджир" className="logo" />
          </Link>
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
            style={{ background: 'none' }}
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="menu-icon"
              style={{ color: 'var(--dark-gray)' }}
            />
          </button>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 