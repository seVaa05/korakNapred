import { videos } from '../data/media'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function InterestingPage() {
  useDocumentTitle('Zanimljivosti')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>Zanimljivosti</h1>
        <h2>Duhoviti video klipovi po našem izboru</h2>
        <div className={styles.videoGrid}>
          {videos.map((src, index) => (
            <div className={styles.video} key={src}>
              <iframe src={src} title={`Zanimljiv video ${index + 1}`} allowFullScreen loading="lazy"></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
