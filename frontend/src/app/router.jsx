import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { HomePage } from '../pages/HomePage'
import { NewsPage } from '../pages/NewsPage'
import { NewsDetailPage } from '../pages/NewsDetailPage'
import { CoursesPage } from '../pages/CoursesPage'
import { CourseCategoryPage } from '../pages/CourseCategoryPage'
import { InterestingPage } from '../pages/InterestingPage'
import { ContactPage } from '../pages/ContactPage'
import { AboutPage } from '../pages/AboutPage'
import { RoomsPage } from '../pages/RoomsPage'
import { DirectionsPage } from '../pages/DirectionsPage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'vesti', element: <NewsPage /> },
      { path: 'vesti/:slug', element: <NewsDetailPage /> },
      { path: 'kursevi', element: <CoursesPage /> },
      { path: 'kursevi/:categorySlug', element: <CourseCategoryPage /> },
      { path: 'zanimljivosti', element: <InterestingPage /> },
      { path: 'kontakt', element: <ContactPage /> },
      { path: 'o-nama', element: <AboutPage /> },
      { path: 'nase-prostorije', element: <RoomsPage /> },
      { path: 'kako-do-nas', element: <DirectionsPage /> },
      { path: 'prijava', element: <RegistrationPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
