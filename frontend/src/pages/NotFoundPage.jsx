import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function NotFoundPage() {
  useDocumentTitle('Stranica nije pronađena')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Stranica nije pronađena</h1>
        <p>Putanja koju ste otvorili ne postoji.</p>
        <Link className="button" to="/">Nazad na početnu</Link>
      </div>
    </section>
  )
}
