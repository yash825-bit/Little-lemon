import './Booking.css';
import { useState } from 'react';

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: 1,
        request: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Table reserved for ${formData.name} on ${formData.date} at ${formData.time}`);
        // You can also send this data to a backend or API
    };

    return (
        <div className="booking-container">
            <h2>Reserve a Table</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                </label>

                <label>
                    Date:
                    <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                </label>

                <label>
                    Time:
                    <input type="time" name="time" required value={formData.time} onChange={handleChange} />
                </label>

                <label>
                    Number of Guests:
                    <input type="number" name="guests" min="1" max="20" required value={formData.guests} onChange={handleChange} />
                </label>

                <label>
                    Special Requests:
                    <textarea name="request" value={formData.request} onChange={handleChange} />
                </label>

                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default Booking;
