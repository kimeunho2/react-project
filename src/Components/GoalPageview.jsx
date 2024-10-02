import React, { useState } from 'react'
import Input from './Input'
import DashboardButton from './DashboardButton'

const GoalPageview = (className) => {
    const [pageViewName, setPageViewName] = useState('');
    const [pageViewUrl, setPageViewUrl] = useState('');
    const [error, setError] = useState('');
    const [goal, setGoal] = useState(false);

    const isValidUrl = (url) => {
        const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/.*)?$/;
        return regex.test(url);
      };


    const handleClick = () => {
        if (!pageViewName || !pageViewUrl) {
            setError('모든 필드를 입력해 주세요');
            return    
        }
        if (!isValidUrl(pageViewUrl)) {
            setError('유효한 URL을 입력해 주세요.');
            return
          }



    }

  return (
<div className={className}>
    <h3>페이지 뷰</h3>
    <h4>목표 이름</h4>
    <Input type={"text"} placeholder={"결제 완료 페이지"} required={true} maxLength={100} onChange={(e) => setPageViewName(e.target.value)} />
    <h4>추적 URL</h4>
    <Input type={"text"} placeholder={"https://www.example.com"} required={true} maxLength={100} onChange={(e) => setPageViewUrl(e.target.value)} />
    <DashboardButton text={'저장'} onClick={handleClick}/>
    {error && <p style={{ color: 'red' }}>{error}</p>}
</div>  
  )
}

export default GoalPageview