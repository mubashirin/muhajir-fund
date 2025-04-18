'use client'

import { useState, FormEvent, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { api } from '@/lib/api'
import { ContactInfo } from '@/types/api'

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadContacts = async () => {
      const response = await api.getContactInfo()
      if (response.error) {
        setError(response.error)
      } else {
        setContactInfo(response.data)
      }
    }

    loadContacts()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Форма отправлена!')
  }

  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-title">Контакты</h1>
        
        <div className="contact-info">
          <h2>Наши контакты</h2>
          
          {contactInfo?.address && (
            <div className="info-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{contactInfo.address}</span>
            </div>
          )}
          
          {contactInfo?.phone && (
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>{contactInfo.phone}</span>
            </div>
          )}
          
          {contactInfo?.email && (
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{contactInfo.email}</span>
            </div>
          )}
        </div>
        
        <div className="contact-form">
          <h2>Напишите нам</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </main>
  )
} 