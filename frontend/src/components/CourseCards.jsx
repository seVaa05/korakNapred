import { Link } from 'react-router-dom'
import { courseCategories } from '../data/courses'
import styles from './CourseCards.module.css'

export function CourseCards() {
  return (
    <div className={styles.grid}>
      {courseCategories.map((category) => (
        <article className="card" key={category.slug}>
          <h3>{category.title}</h3>
          <p>{category.summary}</p>
          <Link className="buttonSecondary" to={`/kursevi/${category.slug}`}>Pogledaj programe</Link>
        </article>
      ))}
    </div>
  )
}
