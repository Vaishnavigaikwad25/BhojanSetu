import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Login.css';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top w-100">
        <div className="container">
          <Link className="navbar-logo" to="/">
            <img src="/logo.png" alt="Logo" className="logo-img" />
            <span className="navbar-brand-text">Bhojan Seva</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item"><Link className="nav-link" to="/">🍛 Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/donate-food">🍽️ Donate Food</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/request-food">🙏 Request Food</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/volunteer">💪 Join as Volunteer</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">📖 About Us</Link></li>
            </ul>
          </div>

          <button className="btn btn-outline-primary login-btn" onClick={toggleModal}>
            🔐 Login / Signup
          </button>
        </div>
      </nav>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal}>×</button>
            <div className='login'>
                <h2>Login or Sign Up</h2>
            </div>
            
            <form className="auth-form">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <p>Don't have an account? <a href="#">Sign Up</a></p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
