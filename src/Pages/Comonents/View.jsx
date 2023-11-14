import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row,Col } from 'react-bootstrap'
import { getAllVideos } from '../../Services/allAPI'

function View({uploadVideoStatus}) {
  const [allVideo,setAllVideo]=useState([])// because we want to story array of items
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getAllUploadedVideo = async ()=>{
    const response = await getAllVideos()
    /* console.log r(response) */
    const {data}=response
 /*    console.log(data) */
 setAllVideo(data)
  }
  console.log(allVideo)
  useEffect(()=>{getAllUploadedVideo()
  setDeleteVideoStatus(false)
  },[uploadVideoStatus ,deleteVideoStatus]) /* here we want al the added videos in view that must be automatically for that we use uploadVideoStatus as dependancy */
  return (
    <div>
       <Row>
        {allVideo.length>0?
        allVideo?.map((video)=>(<Col sm={12}md={6} lg={4} xl={3}>
          <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>)) :
         <p>Nothing to display</p>
        }
       

       </Row>
    </div>
  )
}

export default View