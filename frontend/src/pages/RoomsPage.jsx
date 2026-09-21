import { useEffect, useState } from 'react'
import { roomGallery } from '../data/media'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function RoomsPage() {
  const [activeIndex, setActiveIndex] = useState(null)
  useDocumentTitle('Naše prostorije')
  const isOpen = activeIndex !== null
  const move = (direction) => setActiveIndex((value) => (value + direction + roomGallery.length) % roomGallery.length)

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Naše prostorije</h1>
        <div className={styles.gallery}>
          {roomGallery.map((photo, index) => (
            <button key={photo.src} type="button" onClick={() => setActiveIndex(index)} aria-label={`Otvori fotografiju ${index + 1}`}>
              <img src={photo.src} alt={photo.alt} />
            </button>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Uvećana fotografija">
          <button className={styles.closeButton} type="button" onClick={() => setActiveIndex(null)} aria-label="Zatvori">×</button>
          <img src={roomGallery[activeIndex].src} alt={roomGallery[activeIndex].alt} />
          <div className={styles.dialogControls}>
            <button type="button" onClick={() => move(-1)} aria-label="Prethodna fotografija">‹</button>
            <button type="button" onClick={() => move(1)} aria-label="Sledeća fotografija">›</button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
