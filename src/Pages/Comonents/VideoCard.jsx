import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVides, deleteVidoes } from '../../Services/allAPI';

import { addToWatch } from '../../Services/allAPI';





function VideoCard({displayVideo ,setDeleteVideoStatus }) {
const dragStarted =(e,id)=>{
  console.log(`card no:${id} started dragging`)
  /* console.log(e) */
  e.dataTransfer.setData("videoID",id)   /* used to send the id of video card */
}


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true)
  const {caption,embedLink} = displayVideo
  const today = new Date
let timeStamp = new Intl.DateTimeFormat('en-US',{

  year:'numeric',
  month:'2-digit',
  day:'2-digit',
  hour:'2-digit',
  minute:'2-digit',
  second:'2-digit'
}).format(today)
console.log(timeStamp);

let videoDetails = {
  caption,
  embedLink,
  timeStamp
}
await addToWatch(videoDetails)

  } 

  const removeVideo= async(id)=>{
    const response = await deleteVidoes(id)
    console.log(response)
    setDeleteVideoStatus(true)
  }

  return (
    <div>
      {/* makes video card as draggable ondragstart imediately after the element is drag */}
<Card style={{ width: '100%',height:"400px" }} className='mb-4' draggable onDragStart={(e)=>dragStarted(e, displayVideo?.id)}>
      <Card.Img height={"25opx"} onClick={handleShow} variant="top"style={{height:"250px"}} src={displayVideo.url}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align' /* className='d-flex justify-content-between align-items-center' */> </Card.Title>
     
          {/*   <Card.Text> */}
           <h5>{displayVideo.caption}</h5>
    <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash fa-lg" style={{color: "#fbfcfe"}}></i></button>
           {/*  </Card.Text>
            <button className='btn btn-danger '><i class="fa-solid fa-trash fa-lg" style={{color: "#fbfcfe"}}></i></button> */}
     
      
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="523" src={`${displayVideo.embedLink}?autoplay=1`} title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

       
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default VideoCard