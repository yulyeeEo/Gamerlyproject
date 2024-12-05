import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/question');
  };

  return (
    <div className="main-screen">
      <button className="centerButton" onClick={startGame}>
        <img src="/assets/images/Button.png" alt="Button" />
      </button>
    </div>
  );
};

export default MainScreen;
