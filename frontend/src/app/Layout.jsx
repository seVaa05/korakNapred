import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import { courseCategories } from '../data/courses'
import styles from './Layout.module.css'

const navItems = [
  { to: '/', label: 'Početna', end: true },
  { to: '/vesti', label: 'Vesti' },
  { to: '/zanimljivosti', label: 'Zanimljivosti' },
  { to: '/kontakt', label: 'Kontakt' },
]

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
        <div className={`container ${styles.footerInner}`}>
          <div>
            <strong>Korak napred</strong>
            <p>Bulevar Peka Dapčevića 59 · 065 / 97 382 79</p>
          </div>
          <div className={styles.footerLinks}>
            <Link to="/o-nama">O nama</Link>
            <Link to="/nase-prostorije">Naše prostorije</Link>
            <Link to="/kako-do-nas">Kako do nas</Link>
            <a href="https://www.facebook.com/Edukativni-Centar-Korak-Napred-961526637264996/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.youtube.com/channel/UCwdCnHvslIAKZXuvVu2brmw" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
