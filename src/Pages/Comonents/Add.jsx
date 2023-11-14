import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 
import { useState } from 'react';

import { uploadAllVideo } from '../../Services/allAPI';


function Add({setUploadVideoStatus}) {
  const [video, setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""

  })
 /*  console.log(video) */
 const embedVideoLink = (e)=>{
  const {value}=e.target
  const link=`https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
 }
 console.log(video)

 const handleUpload = async  ()=>{
  const {id,caption,url,embedLink} =video
  if(!id||!caption||!url||!embedLink){
    toast.warning('please fill the form completely')
  }
  else{
    const response = await uploadAllVideo(video)
    console.log(response);
    if(response.status>=200 && response.status<300){
    
      toast.success(`${response.data.caption}is successfully uploaded`)

      /* to change the value of uploadVideoStatus */
      setUploadVideoStatus =(response.data)
      /* making the state value none */
      setVideo({
        id:"",
        caption:"",
        url:"",
        embedLink:""
      })
      /* to close the modal */
      handleClose()
    }
    else{
      toast.error('something went wrong try again later')
      console.log(response)
    }
  }
 }
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
  return (
   <div>
        <div>
            <button onClick={handleShow} style={{backgroundColor:"black",width:"200px",height:"70px"}} className='border border-warning'><h5>Upload new video<span style={{paddingLeft:"10px"}}><i class="fa-solid fa-cloud-arrow-up" style={{color: "#6c737f"}}></i></span></h5></button>
        </div>

        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film fa-lg text-warning"></i> Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Please fill the following details</h5>
          <form className='border border-secondary rounded p-2' >

          <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})}  type="text" placeholder="Enter Video ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setVideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control  onChange={(e)=>setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Video Image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control  onChange={embedVideoLink}  type="text" placeholder="Enter Youtube Video link" />
      </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='bg-warning' variant="primary" onClick={handleUpload}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
{/* alert toast */}
<ToastContainer position='top-center' theme='colored' autoClose={200}></ToastContainer>
   </div>
  )
}

export default Add