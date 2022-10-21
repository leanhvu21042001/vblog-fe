/* eslint-disable @typescript-eslint/indent */
import { lazy } from 'react'

const Home = lazy(() => import('src/pages/Home'))
const AboutMe = lazy(() => import('src/pages/AboutMe'))
const PageNotFound = lazy(() => import('src/pages/PageNotFound'))

export const pages = {
    home: {
        path: '/home',
        text: 'home',
        component: <Home />,
    },
    about_me: {
        path: '/about-me',
        text: 'About Me',
        component: <AboutMe />,
    },
    page_not_found: {
        path: '*',
        text: 'Page Not Found',
        component: <PageNotFound />,
    },
}
