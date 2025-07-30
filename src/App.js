import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import About from './pages/About';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './styles/Layout.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate loading time (1.5 seconds)
        const timeout = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, []);

    if (loading) return <Loader />;

    return (
        <Router>
            <div className="app-container fade-in">
                <header>
                    <h1>Little Lemon Restaurant</h1>
                    <Navbar />
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>

                <footer>
                    <p>&copy; 2025 Little Lemon. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;


