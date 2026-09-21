import { useEffect, useState } from 'react'
import { roomGallery } from '../data/media'
import styles from './PhotoSlider.module.css'

const SLIDE_INTERVAL_MS = 3375

export function PhotoSlider() {
  const [index, setIndex] = useState(0)
  const move = (direction) => setIndex((value) => (value + direction + roomGallery.length) % roomGallery.length)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      move(1)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(timerId)
  }, [])

  return (
    <section className={styles.slider} aria-label="Fotografije prostora">
      <div className={styles.viewport}>
        {roomGallery.map((photo, photoIndex) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={photoIndex === index ? styles.activeImage : ''}
            aria-hidden={photoIndex !== index}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={() => move(-1)} aria-label="Prethodna fotografija">‹</button>
        <div className={styles.dots} aria-label="Izbor fotografije">
          {roomGallery.map((photo, photoIndex) => (
            <button
              key={photo.src}
              type="button"
              className={photoIndex === index ? styles.activeDot : ''}
              onClick={() => setIndex(photoIndex)}
              aria-label={`Prikaži fotografiju ${photoIndex + 1}`}
              aria-current={photoIndex === index ? 'true' : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Sledeća fotografija">›</button>
      </div>
    </section>
  )
}
