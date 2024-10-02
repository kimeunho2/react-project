import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const TestStepTabs = () => {
  return (
    <div>
        <ul className='Test-tab'>
            <li>페이지 설정</li>
            <li><FiArrowRight /></li>
            <li>목표</li>
        </ul>
    </div>
  )
}

export default TestStepTabs