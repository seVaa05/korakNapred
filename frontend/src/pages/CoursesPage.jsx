import { CourseCards } from '../components/CourseCards'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function CoursesPage() {
  useDocumentTitle('Kursevi')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Kursevi</h1>
        <p className="lead">Pregled programa po uzrastu. Matematički programi imaju direktnu prijavu preko početnog frontend kataloga.</p>
        <CourseCards />
      </div>
    </section>
  )
}
