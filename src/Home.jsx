import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Footer from './Footer';

const images = [
  "/slide1.png",
  "/slide2.png",
  "/slide8.png",
  "/slide4.png",
  "/slide5.png",
  "/slide6.png",
  "/slide7.png",
  "/slide8.png"
];

const Home = () => {
  const sliderRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (slider) {
        scrollAmount += 1;
        slider.scrollLeft = scrollAmount;

        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  const displayImages = [...images, ...images];

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <div className="home-container">
        <img src="/home.png" alt="home" className="home-img" />

        <div className="overlay-content">
          <h1>Welcome to Bhojan Seva</h1>
          <p>Connecting food donors with those in need.</p>
          <button className="home-btn" onClick={handleOpenModal}>Donate Now</button>
        </div>

        <div className='para'>
            <div className="center-wrapper">
    <h1 className="txt">See the change your donation makes</h1>
  </div>
          <div className="smooth-carousel" ref={sliderRef}>
            {displayImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className="carousel-image"
              />
            ))}
          </div>
        </div>
      </div>

      <section className="impact-section" id="impact">
        <h2 className='head'>🤲 Together, We Can Make a Difference</h2>
        <p className='pra'>
          Bhojan Seva isn’t just a platform — it's a movement fueled by compassion and community.
          When donors, volunteers, and citizens come together, change happens.
          Every plate of food donated, every request fulfilled, and every journey made by a volunteer
          brings us one step closer to a hunger-free society. Join hands with us and be part of something
          bigger than yourself.
        </p>
      </section>

      <section className="how-it-works" id="how">
        <h2>⚙️ How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>🍽️ Donate</h3>
            <p>Individuals or organizations with surplus food post a donation request on Bhojan Seva.</p>
          </div>
          <div className="step">
            <h3>🚴 Volunteer</h3>
            <p>Verified volunteers pick up the food and ensure it reaches the right hands safely and quickly.</p>
          </div>
          <div className="step">
            <h3>🤝 Distribute</h3>
            <p>Needy individuals or communities receive the donated food with dignity and respect.</p>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Make a Donation</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="number" placeholder="Amount (₹)" required />
              <select>
                <option value="upi">UPI</option>
                <option value="card">Credit/Debit Card</option>
                <option value="netbanking">Net Banking</option>
              </select>
              <button type="submit">Proceed</button>
              <button type="button" onClick={handleCloseModal} className="close-btn">Cancel</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
