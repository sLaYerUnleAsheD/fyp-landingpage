import React from 'react';
import wano from '../images/wano.jpg'
import world from '../images/world.jpg'
const FeaturesSection = () => {
  return (
    <section className="features">

      <div className="video-with-content">
        <div className="video-container">
          <video controls>
            <source src="{addfilename remove quotes}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content-container">
          <h2>World Building Tools</h2>
          <p>
          Create detailed articles about your world with our powerful tools.
          </p>
        </div>
      </div>

      <div className="video-with-content">
        <div className="image-container">
          <img src={world} alt="world" />
        </div>
        <div className="content-container">
          <h2>Interactive Maps</h2>
          <p>
         Bring your world to life with interactive maps and locations.
          </p>
        </div>
      </div>

      <div className="video-with-content">
        <div className="image-container">
        <img src={wano} alt="wano" />
        </div>
        <div className="content-container">
          <h2>Collaborate with Others</h2>
          <p>Invite friends and collaborators to join in building your world.
          </p>
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
