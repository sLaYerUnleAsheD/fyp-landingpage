import React from 'react';
import Background from './Background';

const HeroSection = () => {
  return (
    <>
    
    <section className="hero">
    
      <div className="hero-content">
      <Background />
        <h1>Your World Awaits</h1>
        <p>Create, Explore, and Share</p>
        <button>Get Started</button>
      </div>
    </section>
    </>
  );
};

export default HeroSection;