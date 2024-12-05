import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainTitle() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  };

  return (
    <div onClick={handleClick} className="main-title">
      <img src="assets/images/Title.png" alt="Main Title" />
    </div>
  );
}

export default MainTitle;
