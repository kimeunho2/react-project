import React from 'react'




  const DashboardModal = ({title, children}) => {
    return (
      <div>
          <form>
            <h2>{title}</h2>
            {children}
          </form>    
      </div>
    )
  }

export default DashboardModal