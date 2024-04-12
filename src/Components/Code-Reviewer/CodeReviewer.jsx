import React from 'react';
import './CodeReviewer.css'; // Make sure to import your CSS file here

const Welcome = (props) => {
  return (
    <div className="center-container">
      <img src={`${process.env.PUBLIC_URL}/welcome.gif`} alt="Welcome" className="centered-image" />
      <div className="coming-soon-text">Coming Soon!</div>
    </div>
  );
}

export default Welcome;
