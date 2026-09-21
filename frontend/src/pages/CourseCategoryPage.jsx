import { Link, useParams } from 'react-router-dom'
import { courseCategories, getProgramById } from '../data/courses'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import { Missing } from './NewsDetailPage'
import styles from './Pages.module.css'

export function CourseCategoryPage() {
  const { categorySlug } = useParams()
  const category = courseCategories.find((entry) => entry.slug === categorySlug)
  useDocumentTitle(category ? category.title : 'Kurs nije pronađen')

  if (!category) {
    return <Missing title="Kurs nije pronađen" text="Tražena kategorija kursa ne postoji." />
  }

  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>{category.title}</h1>
        <p className="lead">{category.summary}</p>
        {category.sections.map((section) => (
          <article className={`card ${styles.courseSection}`} key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={styles.programButtons}>
              {section.courseIds.map((courseId) => {
                const program = getProgramById(courseId)
                return program ? <Link className="button" key={courseId} to={`/prijava?course=${courseId}`}>Prijavi se: {program.title}</Link> : null
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
