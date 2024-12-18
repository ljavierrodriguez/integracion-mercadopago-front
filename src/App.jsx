import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SuccessPage from './pages/SuccessPage'
import FailurePage from './pages/FailurePage'
import CheckOutPage from './pages/CheckOutPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/checkout' element={<CheckOutPage />} />
                <Route path='/failure' element={<FailurePage />} />
                <Route path='/success' element={<SuccessPage />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App