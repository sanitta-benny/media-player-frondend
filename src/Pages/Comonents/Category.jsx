import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategorey, deleteCategory, getAllcategory, getVideo, updateCategorey } from '../../Services/allAPI';
import { getAllByPlaceholderText } from '@testing-library/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';


function Category() {
  //sate for get all categorey
  const [allCategorey, setAllCategorey] = useState([])
  const [Category, setAddCategorey] = useState({})
  const handleAddCatogery = async () => {
    console.log(Category);
    if (Category) {
      let body = { //crete a body to store
        Category,
        allVideos: [] //and here it is object
      }
      //make api call
      const response = await addCategorey(body)
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        toast.success("categorey successfully added") //after adding we have conert value of state to null for that we call setcategorey
        //to make the state null after the successful addition
        setAddCategorey('')
        //to close modal
        handleClose()
      }
      else {
        console.log(response)
        toast.error("somethimg went wrong please try again later")
      }
    }
    else {
      toast.warning("please fill the category name")
    }
  }
 
  /* function to get all categorey */
  const getallCategorey = async () => {
    const { data } = await getAllcategory() //here we directly destructure data
    /* console.log(data) */
    setAllCategorey(data)
  }


  const handleDelete = async (id)=>{
    const response =await deleteCategory(id)
    console.log(response)
    getallCategorey()

  }
  

  /* dragover eventlistner */
  const dragover = (e) => {
    //this will prevent reload so that we send from videocard.jsx wont be lost because we dont store that data anywhwere
    e.preventDefault()
    console.log("inside dragover")
  }
  const videoDrop = async (e, categoryId) => {
    console.log(`deopped inside ${categoryId}`);
    //to get the videoid that is send from videocard component

    const videoid = e.dataTransfer.getData("videoID") /* here argument is setData argument */
    console.log(videoid)
    //api to get the particular video that is dragged
    
  const {data} = await getVideo(videoid)
  console.log(data) /* here we get video of that particular id */


//to find the particular id in the specified id 
  let selectedCategory =allCategorey?.find(item=>item.id===categoryId)
  console.log(selectedCategory)
//data is added to the allvideos array in the particular categorey
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory)
  await updateCategorey(categoryId,selectedCategory)
  getallCategorey()
  }

  console.log(allCategorey)
  useEffect(() => {
    getallCategorey()  //for loading catogorey at page loading
  
  }, [])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <button onClick={handleShow} style={{ color: "white", width: "250px", height: "30px" }} className=' bg-warning border border-warning'>Add New Category</button>
        </div>

      {allCategorey?.length > 0 ?  /* here curly brackets for multiolying the contents  */
        allCategorey?.map((item) => (
          <div className='m-5 border border border-secondary rounded p-3'>
            <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e) => dragover(e)} onDrop={(e) => videoDrop(e, item?.id)}> {/* onDragover is event listner */}
            <h6>{item.Category}</h6>
              <button onClick={()=>handleDelete(item?.id)}   className='btn btn-danger'  ><i class="fa-solid fa-trash fa-lg" style={{ color: "#fbfcfe" }}></i></button>

            </div>
            <Row>
              <Col sm={12}>
                {
                  item.allVideos?.length>0?
                  item.allVideos.map(card=>(<VideoCard displayVideo={card}/>))
                 : <p>nothing to display</p>

                }
              </Col>
            </Row>
          </div>

        )) :
        <p>nothing to display</p>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil"></i> Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form className='border border-secondary rounded p-2' >



            <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
              <Form.Label>Category Name</Form.Label>
              <Form.Control onChange={((e) => setAddCategorey(e.target.value))} type="text" placeholder="Enter category name" />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='bg-warning border border-warning' variant="primary" onClick={handleAddCatogery}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {/* alert toast */}
      <ToastContainer position='top-center' theme='colored' autoClose={200}></ToastContainer>

    </div>
  )
}

export default Category