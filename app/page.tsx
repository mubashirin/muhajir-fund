'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { MainContent } from '@/types/api';

export default function Home() {
  const [content, setContent] = useState<MainContent | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const response = await api.getMainContent();
      if (response.data) {
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
          <p>{content?.description || 'Мы помогаем нуждающимся, поддерживаем благотворительные проекты и стремимся сделать мир лучше. Присоединяйтесь к нам в этом благородном деле!'}</p>
          <a href="/contact" className="cta-button">Связаться с нами</a>
        </div>
      </section>
    </main>
  );
}
