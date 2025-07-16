import { useState } from "react";
import './RequestFood.css';
import Footer from '../Footer'; // ✅ Correct path relative to DonateFood.jsx


const RequestFood = () => {
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
    <div className="donate-background1">
      <div className="donate-flex">
        <div className="donate-left">
          <h5 className="donate-heading">
            Hunger doesn’t ask who you are and neither do we.<br></br>
            Whether you're facing hunger yourself or you're a volunteer helping others — Bhojan Seva makes it easy to request fresh, surplus food.
            No one should go to bed hungry. Use this platform to ensure food reaches every empty plate, with dignity and care.
          </h5>
        </div>

        <div className="donate-right">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">🙏 Request Food</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <input
                type="text"
                name="donorName"
                value={formData.donorName}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="numer"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                placeholder="Volunteer Id"
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
                name="Address"
                value={formData.pickupAddress}
                onChange={handleChange}
                placeholder="Address"
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
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>
   
         <section className="request-food" id="request">
      <h2 className='need'>🙏 Need Food Assistance?</h2>
      <p className="intro">
        If you or your community is facing food scarcity, we are here to help. Bhojan Seva connects people in need with available food donations through a compassionate and quick process.
      </p>

            <div className="request-steps">
        <div className="step">
          <h3>📋 Fill the Request Form</h3>
          <p>Provide basic details like your name, location, and the number of people in need. The more accurate the information, the better we can assist.</p>
        </div>

        <div className="step">
          <h3>🔍 Get Verified</h3>
          <p>Our team will quickly review your request to ensure it meets the criteria for urgent assistance.</p>
        </div>

        <div className="step">
          <h3>📦 Receive Food</h3>
          <p>Once approved, our volunteers will reach out and deliver surplus food to your doorstep or a nearby safe point.</p>
        </div>
      </div>


      <div className="request-note">
        <p>⚠️ <strong>Note:</strong> We prioritize requests from orphanages, old-age homes, shelters, and communities with no regular food access.</p>
      </div>
    </section>

      
    </div>
  );
};

export default RequestFood;
