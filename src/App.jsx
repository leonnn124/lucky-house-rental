import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'
import './assets/styles/global.scss'
import './App.scss'

function App() {
    return (
        <Router>
            <Routes>
                {/* 設定根路徑自動導回 HomePage */}
                <Route path="/" element={<HomePage />} />
                <Route path="/intro" element={<HomePage />} />
                <Route path="/services" element={<HomePage />} />
                <Route path="/featured" element={<HomePage />} />
                <Route path="/location" element={<HomePage />} />
                <Route path="/contact" element={<HomePage />} />
                {/* 將所有不符合路徑的導回 HomePage */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
}

export default App