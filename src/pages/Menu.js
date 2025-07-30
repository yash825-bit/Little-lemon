import './Menu.css';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';

const menuItems = [
    {
        id: 1,
        name: "White Sauce Pasta",
        description: "Creamy, cheesy Italian dish made with béchamel sauce and cooked pasta.\n",
        price: "₹250",
        image: dish1
    },
    {
        id: 2,
        name: "Momos",
        description: "Steamed or fried dumplings filled with vegetables or meat, popular in Tibetan, Nepali, and Indian street food.\n",
        price: "₹200",
        image: dish2
    },
    {
        id: 3,
        name: "Samosas",
        description: "Crispy, deep-fried pastries filled with spiced potatoes, peas, or meat, widely enjoyed as a popular Indian snack.\n",
        price: "₹350",
        image: dish3
    }
];

function Menu() {
    return (
        <div className="menu-container">
            <h2>Our Menu</h2>
            <div className="menu-grid">
                {menuItems.map(item => (
                    <div className="menu-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
