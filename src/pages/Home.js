import './Home.css';
import heroImage from '../assets/hero.jpg'; // (You’ll add this image soon)
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <div className="hero-text">
                <h2>Welcome to Little Lemon</h2>
                <p>Serving Mediterranean flavors with a modern twist.</p>
                <Link to="/booking" className="cta-button">Reserve a Table</Link>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Little Lemon Restaurant" />
            </div>
        </div>
    );
}

export default Home;
