import React, { useState } from 'react'
import SideMenu from '../Components/SideMenu'
import SplitUrlTest from '../Components/SplitUrlTest'


const Dashboard = ({onCreate}) => {
  const [open, setOpen] = useState(false);

  
  return (
   <>
   <div className='dashboard'>
   <SideMenu/>
   <SplitUrlTest onCreate={onCreate}/>
   </div>
   </>
  )
}

export default Dashboard