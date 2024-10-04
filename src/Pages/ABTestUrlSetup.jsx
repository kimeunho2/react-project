import React, { useState } from 'react';
import TestStepTabs from '../Components/TestStepTabs';
import Input from '../Components/Input';
import DashboardButton from '../Components/DashboardButton';
import { useNavigate } from 'react-router-dom';

const ABTestUrlSetup = ({ testname, testurl }) => {
  const [addName, setAddName] = useState("");
  const [addUrl, setAddUrl] = useState("");
  const [tempName, setTempName] = useState("");
  const [tempUrl, setTempUrl] = useState(""); 
  const [error, setError] = useState('');
  
  const navigation = useNavigate();

  
  const isValidUrl = (url) => {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/.*)?$/;
    return regex.test(url);
  };

  const handleAdd = (e) => {
    e.preventDefault();
  
    if (!tempName || !tempName) {
      setError('모든 필드를 작성해 주세요');
      return;
    }
  
    if (!isValidUrl(tempUrl)) {
      setError('유효한 URL을 입력해 주세요.');
      return;
      }

      setError('');
      setAddName(tempName);
      setAddUrl(tempUrl);

  };
  
  
  // 다음 버튼 클릭시 작동
  const next = () => {
    if (!addName || !addUrl) {
      setError('비교 페이지가 없습니다.');
      return;
    }
      
      navigation('/split-url/goal');
    
  };
  
  return (
    <>
    <div className='add-page-nav'>
      <h2>{testname}</h2>
      <TestStepTabs/>
      <DashboardButton text={'다음'} onClick={next} />
      
    </div>
      <div className="add-page">
        <h3>비교 페이지 추가</h3>
        <div>
          <p>이름</p>
          <Input type={"text"} placeholder={"이름을 입력하세요"} required={true} maxLength={100} onChange={(e) => setTempName(e.target.value)}/>
          <p>URL</p>
          <Input type={"text"} placeholder={"https://www.example.com"} required={true} maxLength={100} onChange={(e) => setTempUrl(e.target.value)}/>
          <DashboardButton text={"추가"} onClick={handleAdd} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        {/* fieldset을 사용하여 테두리와 제목을 스타일링 */}
        <fieldset className="custom-fieldset">
          <legend>원본</legend>
          <p><strong>URL</strong></p>
          <p>{testurl}</p>
        </fieldset>
      </div>

      {/* '추가' 버튼을 클릭했을 때만 이름과 URL을 출력 */}
      {addName && (
        <div className='add-name-url'>
          <h3>{addName}</h3>
          <p>{addUrl}</p>
        </div>
      )}
    </>
  );
};


export default ABTestUrlSetup;
