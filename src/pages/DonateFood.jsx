import { useState } from "react";
import './Donatefood.css'; // ✅ Correct path relative to DonateFood.jsx


const DonateFood = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    foodType: "",
    quantity: "",
    pickupAddress: "",
    contact: "",
    expiryTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donated Food:", formData);
    alert("Thank you for your donation!");
    setFormData({
      donorName: "",
      foodType: "",
      quantity: "",
      pickupAddress: "",
      contact: "",
      expiryTime: "",
    });
  };

  return (
    <div className="donate-background">
      <div className="donate-flex">
        <div className="donate-left">
          <h5 className="donate-heading">
            "Have extra food? Don’t let it go to waste. Your small act of kindness can feed someone in need.
            Donate freshly prepared or surplus food and help us bridge the gap between hunger and hope.
            Together, let’s make sure no meal goes uneaten."
          </h5>
        </div>

        <div className="donate-right">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">🍛 Donate Food</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <input
                type="text"
                name="donorName"
                value={formData.donorName}
                onChange={handleChange}
                placeholder="Your Name / Restaurant Name"
                required
              />
              <input
                type="text"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                placeholder="Type of Food"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                required
              />
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
            </div>
            <div className="form-row">
              <textarea
                name="pickupAddress"
                value={formData.pickupAddress}
                onChange={handleChange}
                placeholder="Pickup Address"
                required
                rows={2}
              ></textarea>
              <input
                type="datetime-local"
                name="expiryTime"
                value={formData.expiryTime}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit Donation</button>
          </form>
        </div>
      </div>
      <div  className="footer">
        
      </div>
       

       <section className="donate-food" id="donate">
      <h2>🍽️ Donate Food</h2>
      <p className="intro">
        Do you have extra food that can feed someone in need? Bhojan Seva makes it easy to donate your surplus food safely and responsibly.
      </p>

      <div className="donate-steps">
        <div className="step">
          <h3>📝 Submit Details</h3>
          <p>Fill out the donation form with information like food type, quantity, pickup address, contact details, and expiry time.</p>
        </div>

        <div className="step">
          <h3>📞 Confirmation Call</h3>
          <p>Our team may contact you to verify your donation and schedule a pickup time based on your convenience.</p>
        </div>

        <div className="step">
          <h3>🚚 Pickup & Deliver</h3>
          <p>Our trained volunteers collect the food and deliver it to verified recipients in need, ensuring safety and dignity.</p>
        </div>
      </div>

      <div className="donate-note">
        <p>✅ <strong>Note:</strong> We accept freshly prepared or well-preserved surplus food with at least 3 hours of safe consumption time left.</p>
      </div>
    </section>
    </div>
  );
};

export default DonateFood;
