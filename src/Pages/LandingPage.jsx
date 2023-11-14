import React from 'react'
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByurl= useNavigate()
  return (
    <>
    <Row className='mt-5 d-flex justify-content-evenly align-items-center w-100'> 
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere, ut deleniti reprehenderit, voluptatibus explicabo autem quos velit aspernatur voluptatum assumenda dignissimos ratione perferendis eligendi omnis quis quia, cupiditate dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere, ut deleniti reprehenderit, voluptatibus explicabo autem quos velit aspernatur voluptatum assumenda dignissimos ratione perferendis eligendi omnis quis quia, cupiditate dolorum!</p>
        <button onClick={()=>navigateByurl("/home")} className='btn btn-warning mt-3'>Get Started<i class="fa-solid fa-arrow-right"  style={{color:"white",paddingLeft:"3px"}}></i> </button>
      </Col>
      <Col lg={5}>
<img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </Col>
    </Row>

    <div className='container d-flex justify-content-evenly flex-column align-items-center'>
      <h1>Features</h1>
      <div className='  d-flex align-items-center justify-content-evenly w-100 '>
{/* first one */}
<Card style={{ width: '22rem', alignItems:"center",paddingTop:"2%" }}>
      <Card.Img variant="top" style={{width:"300px",height:"300px"}}    src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
{/* second */}
<Card style={{ width: '22rem',alignItems:"center",paddingTop:"2%"  }}>
      <Card.Img variant="top"style={{width:"300px",height:"300px"}}      src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    {/* third */}

<Card style={{ width: '22rem',alignItems:"center",paddingTop:"2%" }}>
      <Card.Img variant="top" style={{width:"300px",height:"300px"}}     src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>WatchHistory</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
 
      </div>



    </div>

    <div className='container border border-2 border-secondary-rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between d-flex flex-wrap' style={{display:"flex",flexWrap:"wrap"}}>
<Row>
  <Col lg={5}  className='display-flex flex-wrap'>
<h3 className='text-warning mb-5'>Simple Fast And Poweful</h3>
<h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloremque, aut nostrum mollitia animi officiis, alias numquam fugiat aperiam adipisci quam minima, omnis suscipit eos voluptatibus impedi</h6>
<h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloremque, aut nostrum mollitia animi officiis, alias numquam fugiat aperiam adipisci quam minima, omnis suscipit eos voluptatibus impedi</h6>
<h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloremque, aut nostrum mollitia animi officiis, alias numquam fugiat aperiam adipisci quam minima, omnis suscipit eos voluptatibus impedi</h6>
  </Col>

  <Col lg={6}>
  <iframe width="100%" height="400" src="https://www.youtube.com/embed/L1kIjDLbrv4" title="Adiyodadi - Video Song | RDX | Fejo | Sam CS | Shane Nigam, Antony Varghese, Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Col>
</Row>

    </div>
    </>
  )
}

export default LandingPage