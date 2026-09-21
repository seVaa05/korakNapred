import { Link } from 'react-router-dom'
import { news } from '../data/news'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function NewsPage() {
  useDocumentTitle('Vesti')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Vesti</h1>
        <div className={styles.listCards}>
          {news.map((item) => (
            <article className="card" key={item.slug}>
              <h2><Link to={`/vesti/${item.slug}`}>{item.title}</Link></h2>
              <p className={styles.date}>Datum: {item.date}</p>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
