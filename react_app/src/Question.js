import React from 'react';
import { useNavigate } from 'react-router-dom';

const Question = ({ questions, answers, setAnswers }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const navigate = useNavigate();

  const handleAnswer = (genre) => {
    setAnswers([...answers, genre]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 모든 선택지를 선택한 경우 결과 화면으로 이동
      navigate('/result');
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div
      className="question"
      style={{
        backgroundImage: `url('/assets/images/Selection_window.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '80%',
        height: '100vh',
        position: 'relative',
        margin: '0 auto', // 화면 중앙에 배치
      }}
    >
      {/* 질문 텍스트 */}
      <div
        className="question-text"
        style={{
          fontSize: '30px',
          textAlign: 'center',
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h2>{question.question}</h2>
      </div>

      {/* 선택지 버튼 */}
      <div
        className="choices"
        style={{
          position: 'absolute',
          bottom: '20%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center', // 가로축 중앙 정렬
          alignItems: 'center', // 세로축 중앙 정렬
          gap: '100px', // 버튼 간격
        }}
      >
        {question.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(choice.genre)}
            style={{
              fontSize: '28px',
              width: '35%', // 버튼 크기
              height: '130px',
              backgroundImage: "url('/assets/images/ChoiceButton_image.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
