import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Input from './Input';
import DashboardButton from './DashboardButton';
import { Button } from '@mui/material';

const Goal = () => {
  const jsCode = `
window.switchUp = window.switchUp || [];
window.switchUp.push(['trackRevenue','HWVwoYB', <<REVENUE AMOUNT>>]);
  `;

  return (
<div >
    <h3>목표 이름</h3>
    <Input type={"text"} placeholder={"A상품 매출 추적"} required={true} maxLength={100} />
    <p>아래 코드를 복사 후 웹 페이지 추가해 주세요.</p>
    {/* 우측 코드 블록 */}
    <SyntaxHighlighter language="javascript" style={darcula}>
          {jsCode}
        </SyntaxHighlighter>
    <DashboardButton text={'저장'}/>

    
</div>  
  )
}


export default Goal;
