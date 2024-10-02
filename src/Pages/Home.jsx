import React from 'react'
import Header from '../Components/Header'
import ProductIntroduction from '../Components/ProductIntroduction'

const Home = () => {
  return (
    <>
    <Header/>
    <h1>변화를 통해 비즈니스 성장을 만듭니다.</h1>
    <p>서브 텍스트</p>
    <h2>메인 텍스트</h2>
    <p>서브 텍스트</p>
    <ul>
      <li><button type='button'>텍스트</button></li>
      <li><button type='button'>텍스트</button></li>
      <li><button type='button'>텍스트</button></li>
    </ul>
    <ProductIntroduction text={"텍스트"}/>
    <ProductIntroduction/>
    <ProductIntroduction/>
    <h2>텍스트</h2>
    <h3>텍스트</h3>
    </>
  )
}

export default Home