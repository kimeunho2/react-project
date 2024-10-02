import React from 'react'

const DashboardButton = ({text, onClick,}) => {
  return (
    <div>
    <button onClick={onClick} type='button' className='dashboard-button' >{text}</button>
    </div>
  )
}

export default DashboardButton