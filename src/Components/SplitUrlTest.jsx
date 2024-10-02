import React, { useState } from 'react'
import DashboardButton from './DashboardButton'
import DashboardModal from './DashboardModal';
import Input from './Input';
import { useNavigate } from 'react-router-dom';




const SplitUrlTest = ({onCreate}) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigate();
  


//새 분할 URL 테스트 만들기 클릭 시
  const handleButtonClick = () => {
    setShowModal(true);
  };

//URL 테스트 만들기 모달 닫기 클릭 시
  const closeModal = () => {
    setShowModal(false);
    setError('');
  };

  const isValidUrl = (url) => {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/.*)?$/;
    return regex.test(url);
  };
  

  //URL 테스트 만들기 클릭 시
  const handleCreate = (e) => {
    e.preventDefault();

    if (!name || !url) {
      setError('모든 필드를 작성해 주세요');
      return
    }
    if (!isValidUrl(url)) {
      setError('유효한 URL을 입력해 주세요.');
      return
    }

    //만들기 성공 시 App.jsx에 handleCreate함수 실행
    onCreate(name, url);

    navigation("/split-url/abtesturlsetup");
  };

  
    return (
        <div>
        <DashboardButton text="새 분할 URL테스트" onClick={handleButtonClick} />
        {showModal && (
          <div className="modal">
            <DashboardModal title={"URL 테스트 만들기"}>
            <p>이름</p>
            <Input type={"text"} placeholder={"테스트 이름을 입력하세요"} required={true} maxLength={100} onChange={(e) => setName(e.target.value)}/>
            <p>테스트 페이지 URL</p>
            <Input type={"text"} placeholder={"https://www.example.com"} required={true} maxLength={100} onChange={(e) => setUrl(e.target.value)}/>
            <button type='submit' onClick={handleCreate}>만들기</button>
            <button type='button' onClick={closeModal}>닫기</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </DashboardModal>
          </div>
          
        )}
        
      </div>
    );
  };

export default SplitUrlTest