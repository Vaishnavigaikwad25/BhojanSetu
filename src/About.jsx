import React from 'react';
import './About.css';  // Don't forget to create and import About.css

const About = () => {
  return (
    <div className='about-container'>
      <h2 className='about-heading'>Our Vision 💚
</h2>
      <p className='about-paragraph'>
        At Bhojan Seva🌟, our mission is to bridge the gap between surplus food and hunger. Every day, countless individuals face food
        insecurity, while large quantities of perfectly edible food go to waste. We aim to change this. By connecting food donors —
        including households, restaurants, caterers, and businesses — with NGOs and people in need, we strive to create a seamless channel
        where excess food reaches hungry mouths in time.
        <br /><br />
        We believe that food is a basic human right. No one should go hungry when resources exist in abundance. Our platform empowers donors
        to contribute easily, while ensuring that the food is safe, fresh, and delivered responsibly. Through collaboration with volunteers,
        community kitchens, and welfare organizations, we ensure that every meal makes a difference.
        <br /><br />
        Beyond feeding the hungry, Bhojan Setu also promotes awareness about food waste and encourages a culture of compassion and sustainability.
        Together, we can reduce food wastage, nourish communities, and build a more equitable society.
        <br /><br />
        Our vision is simple — a world where no food is wasted and no one sleeps hungry. Join us in this mission. Together, we can make an impact
        one meal at a time.
      </p>
    </div>
  );
}

export default About;
