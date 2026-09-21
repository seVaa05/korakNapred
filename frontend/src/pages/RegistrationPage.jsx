import { RegistrationForm } from '../features/registration/RegistrationForm'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function RegistrationPage() {
  useDocumentTitle('Prijava na kurs')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Prijava na kurs</h1>
        <p className="lead">Popunite podatke o polazniku, roditelju i željenom matematičkom programu.</p>
        <RegistrationForm />
      </div>
    </section>
  )
}
