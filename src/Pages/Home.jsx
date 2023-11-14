import React, { useState } from 'react'
import Add from './Comonents/Add'
import { Link } from 'react-router-dom'
import Category from './Comonents/Category'
import View from './Comonents/View'

function Home() {
  /* creation of state */
  const [uploadVideoStatus, setUploadVideoStatus]=useState({})    /* we upload video as object */
  return (
    <>
    <div className='mt-5 ms-5 me-5' style={{display:"flex",justifyContent:"space-between"}}>
      <Add setUploadVideoStatus={setUploadVideoStatus}  />
      <Link  to={"/watch-history"} style={{textDecoration:"none",color:"white",fontSize:"30px"}}><h4>Watch History</h4></Link>
    </div>
    <div className='ms-5 me-5 mt-5' style={{display:"flex",justifyContent:"space-between"}}>
      <div>
        <h3>All Videos</h3>
        <div>
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
      </div>
      <Category/>
    </div>
    </>
  )
}

export default Home