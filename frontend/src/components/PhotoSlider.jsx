import { useState } from 'react'
import { roomGallery } from '../data/media'
import styles from './PhotoSlider.module.css'

export function PhotoSlider() {
  const [index, setIndex] = useState(0)
  const current = roomGallery[index]
  const move = (direction) => setIndex((value) => (value + direction + roomGallery.length) % roomGallery.length)

  return (
    <section className={styles.slider} aria-label="Fotografije prostora">
      <img src={current.src} alt={current.alt} />
      <div className={styles.controls}>
        <button type="button" onClick={() => move(-1)} aria-label="Prethodna fotografija">‹</button>
        <span>{index + 1} / {roomGallery.length}</span>
        <button type="button" onClick={() => move(1)} aria-label="Sledeća fotografija">›</button>
      </div>
    </section>
  )
}
