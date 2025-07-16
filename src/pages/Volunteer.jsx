import React from 'react';
import './Volunteer.css';

const Volunteer = () => {
  return (
    <div className="volunteer-container">
      
      {/* 🖼️ Top Images */}
      <div className="volunteer-images">
        <img src="/v1.png" alt="Helping" />
        <img src="/v2.png" alt="Distributing" />
        <img src="/v3.png" alt="Teamwork" />
      </div>

      {/* 🙋 Volunteer Registration Form */}
      <section className="volunteer-form-section">
        <h2>Join as a Volunteer</h2>
        <p>Become a hero in your community. Help collect and distribute food to those in need.</p>

        <form className="volunteer-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="City / Area" required />
          <textarea placeholder="Why do you want to volunteer?" rows="4" required />
          <button type="submit">Register Now</button>
        </form>
      </section>

      {/* 📋 How Volunteers Work */}
      <section className="volunteer-how-section">
        <h2>👣 How Volunteers Work</h2>
        <div className='txt'>
        <ul>
          <li >Volunteers get notified about nearby food donations via the platform.</li>
          <li >They accept the task and collect the food from the donor's location.</li>
          <li >They ensure timely delivery to people in need — slums, shelters, orphanages, etc.</li>
          <li >Volunteers can track tasks, update status, and gain recognition for their service.</li>
        </ul>
        </div>
        
      </section>

      {/* 🔄 For Existing Volunteers */}
      <section className="existing-volunteers">
        <h2>🚴 Already a Volunteer?</h2>
        <p>
          Log in to your dashboard to view live food donation requests. Accept tasks based on your location
          and availability. Help bridge the gap between surplus and scarcity with your valuable service.
        </p>
      </section>
    </div>
  );
};

export default Volunteer;
