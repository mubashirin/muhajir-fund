'use client'

import { useState, FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Форма отправлена!')
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Свяжитесь с нами</h1>
        
        <div className="contact-info">
          <h2>Контактная информация</h2>
          
          <div className="info-item">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>ул. Примерная, д. 123, г. Москва, 123456</span>
          </div>
          
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>+7 (999) 123-45-67</span>
          </div>
          
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@example.com</span>
          </div>
          
          <div className="info-item">
            <FontAwesomeIcon icon={faClock} />
            <span>Пн-Пт: 9:00 - 18:00</span>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Форма обратной связи</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Электронная почта</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
} 