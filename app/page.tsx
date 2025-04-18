'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { MainPageContent } from '@/types/api';

export default function Home() {
  const [content, setContent] = useState<MainPageContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const response = await api.getMainContent();
      if (response.error) {
        setError(response.error);
      } else {
        setContent(response.data);
      }
    };

    loadContent();
  }, []);

  return (
    <main className="page-content">
      <section className="hero">
        <div className="container">
          <h1>Благотворительный фонд <span>«Мухаджир»</span></h1>
          <p>{content?.description || 'Загрузка...'}</p>
          <a href="/contact" className="cta-button">Связаться с нами</a>
        </div>
      </section>
    </main>
  );
}
