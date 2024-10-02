import React, { useState } from 'react';

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <>
      <div className="nav-bar">
        <div className="logo">로고</div>
        <div className="nav-items">
          <div className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            서비스 
            {
              isHovered && 
              (
                <div className='dropdown-menu'>
                  <div className="dropdown-item">A/B 테스트</div>
                </div>
              )
            }
          </div>
          <div className="nav-item">가이드</div>
          <div className="nav-item">요금제</div>
          <div className="nav-item">도입 지원</div>
        </div>
        <div className="auth-buttons">
          <p className="nav-item login">로그인</p>
          <button className="cta">시작하기</button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
