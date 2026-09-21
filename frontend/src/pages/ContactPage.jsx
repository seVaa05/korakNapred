import { useState } from 'react'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps?q=Edukativni%20centar%20Korak%20napred%2C%20Bulevar%20Peka%20Dap%C4%8Devi%C4%87a%2059%2C%20Beograd&output=embed'

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
            <div className={styles.mapEmbed}>
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Lokacija Edukativnog centra Korak napred"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </aside>
          <form className={`card ${styles.contactBox} ${styles.simpleForm}`} onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            <h2>Pišite nam</h2>
            {sent ? <p role="status">Demo poruka je obrađena. Podaci nisu poslati edukativnom centru.</p> : null}
            <label><span>Ime i prezime:</span><input required /></label>
            <label><span>E-mail:</span><input type="email" required /></label>
              <label><span>Telefon:</span><input type="tel" required /></label>
            <label><span>Naslov:</span><input required /></label>
            <label className={styles.messageLabel}><span>Poruka:</span><textarea required rows="5"></textarea></label>
            <button className="button" type="submit">Pošalji demo poruku</button>
          </form>
        </div>
      </div>
    </section>
  )
}
