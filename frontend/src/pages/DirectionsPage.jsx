import intersectionImage from '../assets/directions/smernica_1.jpg'
import approachImage from '../assets/directions/smernica_2.jpg'
import entranceImage from '../assets/directions/ec.jpg'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps?q=Edukativni%20centar%20Korak%20napred%2C%20Bulevar%20Peka%20Dap%C4%8Devi%C4%87a%2059%2C%20Beograd&output=embed'

const directionPhotos = [
  {
    src: intersectionImage,
    alt: 'Raskrsnica Bulevara Peka Dapčevića i Ulice Dušana Jovanovića sa oznakama A, B i C',
    title: 'Raskrsnica',
    text: 'Na slici je prikazana raskrsnica Bulevara Peka Dapčevića i Ulice Dušana Jovanovića.',
    notes: [
      'A – Prilaz Edukativnom centru',
      'B – Stanica autobusa 25, 25P i 39 prema Autokomandi',
      'C – Stanica autobusa 25, 25P i 39 prema Kumodražu',
    ],
  },
  {
    src: approachImage,
    alt: 'Pogled sa stanice na prilaz Edukativnom centru sa oznakama A, B i C',
    title: 'Prilaz centru',
    text: 'Fotografija predstavlja pogled sa stanice na prilaz Edukativnom centru.',
    notes: [
      'A – Prilaz Edukativnom centru',
      'B – Edukativni centar „Korak napred“',
      'C – Stanica autobusa 25, 25P i 39 prema Autokomandi',
    ],
  },
  {
    src: entranceImage,
    alt: 'Ulaz u Edukativni centar Korak napred',
    title: 'Ulaz u centar',
    text: 'Ulaz u Edukativni centar Korak napred.',
    notes: [],
  },
]

export function DirectionsPage() {
  useDocumentTitle('Kako do nas')
  return (
    <section className="page">
      <div className={`container ${styles.content} ${styles.directionsPage}`}>
        <header className={styles.directionsIntro}>
          <div>
            <h1>KAKO DO NAS</h1>
            <p>
              Edukativni centar „Korak napred“ nalazi se u <strong>Bulevaru Peka Dapčevića 59</strong>,
              kod raskrsnice sa Ulicom Dušana Jovanovića, u blizini naselja Stepa Stepanović.
            </p>
            <p>
              Do centra se može doći autobusima <strong>25</strong>, <strong>25P</strong> i <strong>39</strong>.
              Stanica je <strong>Dušana Jovanovića</strong>.
            </p>
          </div>
          <div className={styles.directionsFacts} aria-label="Sažetak lokacije">
            <span>Adresa</span>
            <strong>Bulevar Peka Dapčevića 59</strong>
            <span>Autobusi</span>
            <strong>25 · 25P · 39</strong>
            <span>Stanica</span>
            <strong>Dušana Jovanovića</strong>
          </div>
        </header>

        <div className={styles.directionPhotoList}>
          {directionPhotos.map((photo) => (
            <article className={`card ${styles.directionCard}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <div className={styles.directionText}>
                <h2>{photo.title}</h2>
                <p>{photo.text}</p>
                {photo.notes.length > 0 ? (
                  <ul>
                    {photo.notes.map((note) => <li key={note}>{note}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <section className={`card ${styles.locationSection}`}>
          <div>
            <h2>Lokacija</h2>
            <p><strong>Edukativni centar „Korak napred“</strong></p>
            <p>Bulevar Peka Dapčevića 59, Beograd</p>
          </div>
          <div className={styles.directionsMap}>
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Mapa lokacije Edukativnog centra Korak napred"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  )
}
