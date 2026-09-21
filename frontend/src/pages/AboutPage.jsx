import { useDocumentTitle } from '../utils/useDocumentTitle'
import styles from './Pages.module.css'

export function AboutPage() {
  useDocumentTitle('O nama')
  return (
    <section className="page">
      <div className={`container ${styles.content}`}>
        <h1>O nama</h1>
        <p>Nije dovoljno samo znati, nije dovoljno samo umeti preneti znanje, potrebno je zainteresovati učenike da zavole neki predmet, motivisati ih da rade puno i da u tom radu i rezultatima uživaju.</p>
        <p>Nakon više od 20 godina podučavanja, profesor Ivan Elčić sa saradnicima je otvorio Edukativni centar "Korak napred", kako bi pomogao mladima da steknu vrhunsko znanje pre svega iz matematike, fizike i informatike.</p>
        <p>Ključno u radu sa đacima je da oni zavole da budu na času. U opuštenoj i prijateljskoj atmosferi, vođeni nasmejanim profesorima koji stalno unapređuju svoj rad, učenici brzo napreduju.</p>
        <p>Među predavačima su studenti Matematičkog, Fizičkog i Elektrotehničkog fakulteta Univerziteta u Beogradu, bivši učenici Matematičke gimnazije i osvajači medalja na međunarodnim olimpijadama.</p>
      </div>
    </section>
  )
}
