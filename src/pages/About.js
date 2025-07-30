import './About.css';
import chefImage from '../assets/chef.jpg'; // Replace with your chef image

function About() {
    return (
        <div className="about-container">
            <h2>About Little Lemon</h2>

            <section className="about-section">
                <p>
                    Little Lemon is a family-owned Mediterranean restaurant that blends tradition with innovation.
                    Located in the heart of your city, we bring the warmth of Greek and Italian hospitality to every dish.
                </p>
            </section>

            <section className="chef-section">
                <div className="chef-image">
                    <img src={chefImage} alt="Chef" />
                </div>
                <div className="chef-info">
                    <h3>Meet Our Head Chef</h3>
                    <p>
                        Chef Mario has over 20 years of culinary experience. From classic Greek salads to modern lemon-infused chicken, his creations are crafted with love and locally sourced ingredients.
                    </p>
                </div>
            </section>

            <section className="contact-section">
                <h3>Visit Us</h3>
                <p>📍 123 Lemon Street, Food City, FL 98765</p>
                <p>📞 +91-98765-43210</p>
                <p>✉️ contact@littlelemon.com</p>
            </section>
        </div>
    );
}

export default About;
