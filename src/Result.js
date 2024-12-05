import React, { useState } from 'react';
import RandomImage from './Randomimage'; // RandomImage 컴포넌트 import

const Result = ({ answers }) => {
  const genreCounts = {
    Horror: 0,
    "Co-op": 0,
    Simulation: 0,
    FPS: 0,
    RPG: 0,
    Adventure: 0
  };

  // 선택된 장르 수 계산
  answers.forEach(genre => {
    if (genre in genreCounts) {
      genreCounts[genre]++;
    }
  });

  // 가장 많이 선택된 장르 찾기
  let maxGenre = '';
  let maxCount = 0;
  for (const genre in genreCounts) {
    if (genreCounts[genre] > maxCount) {
      maxGenre = genre;
      maxCount = genreCounts[genre];
    }
  }

  // 장르별 추천 메시지와 이미지 경로 설정
  const games = {
    Horror: { image: "/assets/images/horror.png" },
    "Co-op": { image: "/assets/images/coop.png" },
    Simulation: { image: "/assets/images/simulation.png" },
    FPS: { image: "/assets/images/fps.png" },
    RPG: { image: "/assets/images/rpg.png" },
    Adventure: { image: "/assets/images/adventure.png" }
  };

  const [showRandomImage, setShowRandomImage] = useState(false);

  // 장르 이미지 클릭 시 랜덤 게임 이미지 페이지로 이동
  const handleGenreImageClick = () => {
    setShowRandomImage(true);
  };

  if (showRandomImage) {
    return <RandomImage maxGenre={maxGenre} />;
  }

  return (
    <div className="result">
      {/* 장르 이미지 */}
      <img 
        src={games[maxGenre].image} 
        alt={`${maxGenre} 이미지`} 
        style={{ width: '1980px', height: 'auto', marginTop: '20px', cursor: 'pointer' }} 
        onClick={handleGenreImageClick} // 장르 이미지를 클릭하면 랜덤 이미지 페이지로 이동
      />
    </div>
  );
};

export default Result;
