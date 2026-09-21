import { Link } from 'react-router-dom'
import { CourseCards } from '../components/CourseCards'
import { PhotoSlider } from '../components/PhotoSlider'
import { news } from '../data/news'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function HomePage() {
  useDocumentTitle('Početna')
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <aside className={`card ${styles.newsPanel}`}>
            <h2>Najnovije vesti</h2>
            <div className={styles.newsList}>
              {news.slice(0, 3).map((item) => (
                <article className={styles.newsItem} key={item.slug}>
                  <Link to={`/vesti/${item.slug}`}>{item.title}</Link>
                  <p>{item.excerpt}</p>
                  <span className={styles.date}>Datum: {item.date}</span>
                </article>
              ))}
            </div>
          </aside>
          <div>
            <PhotoSlider />
            <div className={styles.actions}>
              <Link className="button" to="/kursevi">Pogledaj kurseve</Link>
              <Link className="buttonSecondary" to="/prijava">Prijavi se na kurs</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="page">
        <div className="container">
          <h1 className="sectionTitle">Edukativni centar „Korak napred”</h1>
          <p className="lead">Privatni časovi i kursevi za predškolce, osnovce, srednjoškolce i studente, sa posebnim fokusom na matematiku i pripremnu nastavu.</p>
        </div>
      </section>
      <section className={styles.warmBand}>
        <div className="container">
          <CourseCards />
        </div>
      </section>
    </>
  )
}
