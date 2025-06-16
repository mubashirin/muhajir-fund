'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { MainContent } from '@/types/api';
import Skeleton from './components/Skeleton';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Home() {
  const [content, setContent] = useState<MainContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await api.getMainContent();
        if (response.error) {
          setError(response.error);
        } else if (response.data) {
          setContent(response.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке данных');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  return (
    <main className="page-content">
      <section className="hero">
        <div className="container">
          <h1>Благотворительный фонд <span>«Мухаджир»</span></h1>
          {isLoading ? (
            <div className="space-y-3 max-w-3xl mx-auto">
              <Skeleton height="24px" />
              <Skeleton height="24px" width="95%" />
              <Skeleton height="24px" width="90%" />
              <Skeleton height="24px" width="85%" style={{ opacity: 0.5 }} />
              <Skeleton height="24px" width="70%" style={{ opacity: 0.3 }} />
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {(() => {
                let descriptionText = String(content?.description || 'Мы помогаем нуждающимся, поддерживаем благотворительные проекты и стремимся сделать мир лучше. Присоединяйтесь к нам в этом благородном деле!');
                
                // Шаг 1: Заменяем \\n на \n по всей строке
                descriptionText = descriptionText.replace(/\\n/g, '\n');

                // Шаг 2: Удаляем ###### и любые следующие пробелы или дефисы в начале КАЖДОЙ строки, где они встречаются
                descriptionText = descriptionText.replace(/^######[\s-]*/gm, '');

                console.log('Processed Description for Markdown:', descriptionText);
                
                return descriptionText.trim(); // Удаляем конечные пробелы и переносы
              })()}
            </ReactMarkdown>
          )}
          <div className="cta-button-wrapper">
            <a href="/contact" className="cta-button">Связаться с нами</a>
          </div>
        </div>
      </section>
    </main>
  );
}
