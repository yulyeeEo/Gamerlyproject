import React, { useState } from 'react';

const gameImages = {
  Horror: ["/assets/images/horror1.png", "/assets/images/horror2.png"],
  "Co-op": ["/assets/images/coop1.png", "/assets/images/coop2.png"],
  Simulation: ["/assets/images/simulation1.png", "/assets/images/simulation2.png"],
  FPS: ["/assets/images/fps1.png", "/assets/images/fps2.png"],
  RPG: ["/assets/images/rpg1.png", "/assets/images/rpg2.png"],
  Adventure: ["/assets/images/adventure1.png", "/assets/images/adventure2.png"]
};

const RandomImage = ({ maxGenre }) => {
  // 랜덤으로 선택된 게임 이미지 상태 설정
  const [randomGameImage, setRandomGameImage] = useState('');
  const [showGameImage, setShowGameImage] = useState(false);

  // 장르 이미지 클릭 시 게임 이미지 랜덤 업데이트
  const handleGenreImageClick = () => {
    const newRandomImage = gameImages[maxGenre][Math.floor(Math.random() * gameImages[maxGenre].length)];
    setRandomGameImage(newRandomImage);
    setShowGameImage(true); // 게임 이미지 표시
  };

  return (
    <div>
      
      {/* 장르 이미지 클릭 시 랜덤 게임 이미지 표시 */}
      <img
        src={gameImages[maxGenre][0]} // 장르 이미지 예시
        alt={`${maxGenre} 장르 이미지`}
        style={{ cursor: 'pointer', width: '1980px', height: 'auto', marginTop: '20px' }}
        onClick={handleGenreImageClick} // 클릭 핸들러
      />
      
    </div>
  );
};

export default RandomImage;
