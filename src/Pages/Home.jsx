import React from 'react';
import Header from '../Components/Header';
import ProductIntroduction from '../Components/ProductIntroduction';


const Home = () => {
  return (
    <>
    <div>
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>변화를 통해 비즈니스 성장을 만듭니다.</h1>
          <p>혁신적인 A/B 테스트 도구로 더 나은 결정을 내리세요.</p>
          <button className="cta-button">지금 시작하기</button>
        </div>
        <div className="hero-image">
          {/* Add an image or illustration */}
          <img src="your-image-url.jpg" alt="Hero Illustration" />
        </div>
      </section>

      <section className="features-section">
        <h2>제품 기능</h2>
        <ul className="features-list">
          <li>빠른 테스트 실행</li>
          <li>맞춤형 분석 리포트</li>
          <li>사용자 친화적인 인터페이스</li>
        </ul>
      </section>

      <section className="product-intro-section">
        <ProductIntroduction text={"A/B 테스트로 최적화된 성과를 얻으세요"} />
        <ProductIntroduction />
        <ProductIntroduction />
      </section>

      <footer className="footer-section">
        <h2>스위치업에 대해 더 알아보기</h2>
        <h3>지금 가입하고 더 많은 기능을 확인하세요</h3>
        <button className="cta-button">무료로 시작하기</button>
      </footer>
      </div>
    </>
  );
};

export default Home;
