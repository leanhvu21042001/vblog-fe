import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import { createKeyForRoute } from 'src/helpers'
import { pages } from './routes.constants'

const renderRouter = () =>
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path='/' element={<Navigate to={pages.home.path} />} />
                {
                    Object.values(pages).map(({ path, text, component }) =>
                        <Route key={createKeyForRoute(path, text)} exact path={path} element={component} />)
                }
            </Routes>
        </Suspense>
    </Router>

export default renderRouter
