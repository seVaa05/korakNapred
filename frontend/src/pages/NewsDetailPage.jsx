import { Link, useParams } from 'react-router-dom'
import { news } from '../data/news'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function NewsDetailPage() {
  const { slug } = useParams()
  const item = news.find((entry) => entry.slug === slug)
  useDocumentTitle(item ? item.title : 'Vest nije pronađena')

  if (!item) {
    return <Missing title="Vest nije pronađena" text="Tražena vest ne postoji ili je promenjena putanja." />
  }

  return (
    <section className="page">
      <article className={`container ${styles.content}`}>
        <p className={styles.date}>Datum: {item.date}</p>
        <h1>{item.title}</h1>
        {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p><Link to="/vesti">Nazad na vesti</Link></p>
      </article>
    </section>
  )
}

export function Missing({ title, text }) {
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link className="button" to="/">Nazad na početnu</Link>
      </div>
    </section>
  )
}
