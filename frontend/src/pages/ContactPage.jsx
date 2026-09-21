import { useState } from 'react'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function ContactPage() {
  const [sent, setSent] = useState(false)
  useDocumentTitle('Kontakt')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Kontakt</h1>
        <div className={styles.contactGrid}>
          <aside className={`card ${styles.contactBox}`}>
            <h2>Informacije</h2>
            <p><strong>Adresa:</strong> Bulevar Peka Dapčevića 59</p>
            <p><strong>E-mail:</strong> <a href="mailto:info@koraknapred.rs">info@koraknapred.rs</a></p>
            <p><strong>Telefon:</strong> <a href="tel:+381659738279">065 / 97 382 79</a></p>
          </aside>
          <form className={`card ${styles.contactBox} ${styles.simpleForm}`} onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            <h2>Pišite nam</h2>
            {sent ? <p role="status">Demo poruka je obrađena. Podaci nisu poslati edukativnom centru.</p> : null}
            <label>Ime i prezime<input required /></label>
            <label>E-mail<input type="email" required /></label>
            <label>Naslov<input required /></label>
            <label>Poruka<textarea required rows="5"></textarea></label>
            <button className="button" type="submit">Pošalji demo poruku</button>
          </form>
        </div>
      </div>
    </section>
  )
}
