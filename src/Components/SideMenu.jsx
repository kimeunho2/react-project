import React from 'react'

const SideMenu = ({text}) => {
    return (
      <div className="sidebar">
        <ul className='abTest'>
          <li>분할 URL 테스트</li>
        </ul>
        <ul className='event'>
          <li>이벤트 관리</li>
        </ul>
      </div>
    );
  };
  
  export default SideMenu;