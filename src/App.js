import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Question from './Question';
import { questions } from './Questions';
import Result from './Result';
import RandomImage from './Randomimage';

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

function MainScreen() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/question');
  };

  return (
    <div>
      <img src="assets/images/Title.png" alt="Game title" />
      <img src="assets/images/main_image.png" alt="Main screen image" />
      <button className="centerButton" onClick={startGame}>
      <img src="assets/images/Button.png" alt="Start game button" />
</button>

    </div>
  );
}

function Home() {
  return <MainTitle />;
}

function App() {
  const [answers, setAnswers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/question" element={<Question questions={questions} answers={answers} setAnswers={setAnswers} />} />
        <Route path="/result" element={<Result answers={answers} />} />
        <Route path="/random-image" element={<RandomImage />} />
      </Routes>
    </Router>
  );
}

export default App;
