import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import footerLogo from '../assets/footer-logo.png'
import logo from '../assets/logo.png'
import { courseCategories } from '../data/courses'
import styles from './Layout.module.css'

const navItems = [
  { to: '/', label: 'Početna', end: true },
  { to: '/vesti', label: 'Vesti' },
  { to: '/zanimljivosti', label: 'Zanimljivosti' },
  { to: '/kontakt', label: 'Kontakt' },
]

function FooterIcon({ name }) {
  const paths = {
    location: (
      <>
        <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    phone: <path d="M8.2 5.2 10 9c.2.5.1 1-.3 1.3l-1.1.9a11.1 11.1 0 0 0 4.2 4.2l.9-1.1c.3-.4.8-.5 1.3-.3l3.8 1.8c.5.2.8.8.6 1.3l-.8 3c-.2.5-.6.9-1.2.9A14.4 14.4 0 0 1 3 6.6c0-.6.4-1 .9-1.2l3-.8c.5-.2 1.1.1 1.3.6Z" />,
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    facebook: <path d="M14 8.2h2V5h-2.4C10.8 5 9 6.8 9 9.6V12H6.7v3.3H9V22h3.5v-6.7h2.8L16 12h-3.5V9.8c0-1 .5-1.6 1.5-1.6Z" />,
    youtube: (
      <>
        <path d="M21 8.2a2.7 2.7 0 0 0-1.9-1.9C17.5 6 12 6 12 6s-5.5 0-7.1.3A2.7 2.7 0 0 0 3 8.2 28 28 0 0 0 2.7 12a28 28 0 0 0 .3 3.8 2.7 2.7 0 0 0 1.9 1.9c1.6.3 7.1.3 7.1.3s5.5 0 7.1-.3a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .3-3.8 28 28 0 0 0-.3-3.8Z" />
        <path d="m10.4 14.5 4.2-2.5-4.2-2.5v5Z" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  )
}

export function Layout() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 861px)')
    const handleChange = (event) => {
      if (event.matches) setIsOpen(false)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <Link to="/" className={styles.logoLink} aria-label="Korak napred početna">
            <img src={logo} alt="Edukativni centar Korak napred" />
          </Link>
          <button
            type="button"
            className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span></span><span></span><span></span>
            <span className={styles.menuText}>Meni</span>
          </button>
          <nav
            id="main-navigation"
            className={`${styles.nav} ${isOpen ? styles.open : ''}`}
            aria-label="Glavna navigacija"
            onClick={(event) => {
              if (event.target.closest('a')) setIsOpen(false)
            }}
          >
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? styles.active : undefined)}>
                {item.label}
              </NavLink>
            ))}
            <div className={styles.dropdown}>
              <NavLink to="/kursevi" className={({ isActive }) => (isActive ? styles.active : undefined)}>Kursevi</NavLink>
              <div className={styles.dropdownMenu}>
                {courseCategories.map((category) => (
                  <Link key={category.slug} to={`/kursevi/${category.slug}`}>{category.shortTitle}</Link>
                ))}
              </div>
            </div>
            <NavLink to="/prijava" className={styles.cta}>Prijavi se na kurs</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerContent}`}>
          <div className={styles.footerGrid}>
            <section className={styles.footerBrand} aria-label="Korak napred">
              <img src={footerLogo} alt="Edukativni centar Korak napred" />
              <div>
                <strong>Korak napred</strong>
                <span>EDUKATIVNI CENTAR</span>
              </div>
              <p>Uz znanje, sigurniji korak ka uspešnijoj budućnosti.</p>
            </section>

            <section className={styles.footerColumn}>
              <h2>Brzi linkovi</h2>
              <nav className={styles.footerNav} aria-label="Brzi linkovi">
                <Link to="/o-nama">O nama</Link>
                <Link to="/nase-prostorije">Naše prostorije</Link>
                <Link to="/kako-do-nas">Kako do nas</Link>
              </nav>
            </section>

            <section className={styles.footerColumn}>
              <h2>Kontakt</h2>
              <address className={styles.footerContact}>
                <span>
                  <FooterIcon name="location" />
                  <span>Bulevar Peka Dapčevića 59<br />Beograd</span>
                </span>
                <a href="tel:+381659738279">
                  <FooterIcon name="phone" />
                  <span>065 / 97 382 79</span>
                </a>
                <a href="mailto:info@koraknapred.rs">
                  <FooterIcon name="mail" />
                  <span>info@koraknapred.rs</span>
                </a>
              </address>
            </section>

            <section className={styles.footerColumn}>
              <h2>Pratite nas</h2>
              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/Edukativni-Centar-Korak-Napred-961526637264996/" target="_blank" rel="noreferrer" aria-label="Korak napred na Facebook-u">
                  <FooterIcon name="facebook" />
                </a>
                <a href="https://www.youtube.com/channel/UCwdCnHvslIAKZXuvVu2brmw" target="_blank" rel="noreferrer" aria-label="Korak napred na YouTube-u">
                  <FooterIcon name="youtube" />
                </a>
              </div>
              <p>Budite u toku sa novostima, korisnim savetima i dešavanjima.</p>
            </section>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 Edukativni centar Korak napred. Sva prava zadržana.</p>
            <p className={styles.footerMotto}>Znanje menja sve.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
