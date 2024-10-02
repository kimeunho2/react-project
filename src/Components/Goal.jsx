import React, { useState } from 'react';
import { MdOutlineFindInPage } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import GoalPageview from './GoalPageview';
import TestStepTabs from './TestStepTabs';
import DashboardButton from './DashboardButton';
import GoalSales from './GoalSales';

const Goal = () => {
    const [showModal, setShowModal] = useState('');

   
const handlePageview = () => {
    setShowModal('pageView');
};

const handleSales = () => {
  setShowModal('sales')
}
  
  return (
<div>
  <div className='add-page-nav'>
  <TestStepTabs/>
  <DashboardButton text={'시작'}/>
  </div>
<div className='goal-layout'>

<div className='goal-tap'>
    <div className='goal-select'>
        <h1>목표 선택</h1>
        <span>추적할 목표를 선택해주세요</span>
    </div>

    <button type='button' className='gola-pageview' onClick={handlePageview} >
        <div>
          <MdOutlineFindInPage />
        </div>
        <div>
          <h4>페이지 뷰</h4>
          <p>특정 URL 방문수를 추적합니다</p>
        </div>
      </button>
    

    <button className='gola-sales' onClick={handleSales}>
        <GrMoney />
        <h4>매출</h4>
        <p>각 페이지에서 발생된 매출을 추적합니다.</p>
    </button>

    <button className='gola-code'>
        <FaCode />
        <h4>이벤트</h4>
        <p>맞춤 이벤트를 추적합니다.</p>
    </button>
  
</div>
 <div className='goal-content'>
 {showModal === 'pageView' && <GoalPageview />}
 {showModal === 'sales' && <GoalSales />}
 </div>
</div>
</div>
  )
}

export default Goal