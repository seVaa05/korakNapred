import roomEntrance from '../assets/gallery/prostorije/010a.jpg'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function DirectionsPage() {
  useDocumentTitle('Kako do nas')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Kako do nas?</h1>
        <p>Nalazimo se u Bulevaru Peka Dapčevića 59, kod raskrsnice sa Ulicom Dušana Jovanovića, blizu naselja Stepa Stepanović.</p>
        <p>Do nas se može doći autobusima 25, 25p i 39, a najbliže stajalište je Dušana Jovanovića.</p>
        <img className={styles.mapImage} src={roomEntrance} alt="Ulaz u Edukativni centar Korak napred" />
        <p><a className="buttonSecondary" href="https://www.google.com/maps/search/?api=1&query=Bulevar%20Peka%20Dapcevi%C4%87a%2059%20Beograd" target="_blank" rel="noreferrer">Otvori lokaciju na mapi</a></p>
      </div>
    </section>
  )
}
