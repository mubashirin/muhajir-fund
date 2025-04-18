import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-content">
      <section className="hero">
        <div className="container">
          <h1>Благотворительный фонд Мухаджир</h1>
          <p>
            Это краткое описание вашей компании. Здесь вы можете рассказать о вашей деятельности, 
            миссии и ценностях. Сделайте это описание простым и понятным для посетителей сайта.
            Сфокусируйтесь на ключевых особенностях, которые выделяют вас среди конкурентов.
          </p>
          <Link href="/contact" className="cta-button">
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}
