import React from 'react'
import {Link} from 'react-router-dom'


 

function Footer() {
  return (
   <div style={{width:"100%",height:"300px"}} className='d-flex align-items-evently justify-content-center flex-column'>
      <div className='footer d-flex align-items-center justify-content-evently'style={{justifyContent:"space-evenly"}}>
      <div className="website" style={{width:"400px"}}>
<h4><i class="fa-solid fa-video fa-beat text-warning me-3"></i>   {' '}
      Video Player</h4>
      <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dignissimos ipsum dolorem accusantium in maxime facere voluptate architecto! Vel dolorum laudantium modi officia perferendis nihil eos tenetur quis nemo molestias!</h6>

      </div>
      <div className="link d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:"none",color:"white"}}>Home Page</Link>
        <Link to={'/watch-history'} style={{textDecoration:"none",color:"white"}}>Watch-historty Page</Link>
      </div>
      <div className="guids d-flex flex-column">
        <h4>Guids</h4>
        <Link to={''} style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>

       <Link to={'https://bootswatch.com/'} style={{textDecoration:"none",color:"white"}}>BootsWatch</Link>
      
      
      </div>
      <div className="contact">
        <h4>Contact Us</h4>
<div className='d-flex'>
  <input  placeholder='Enter the email id' className='form-control w-75' type="text" />
  <button className='btn bg-warning' style={{color:"white",marginLeft:"3%"}}>Subscribe</button>
</div>
<div className='d-flex'style={{marginTop:"20px", width:"100%",justifyContent:"space-evenly"}}>
  <Link> <i class="fa-brands fa-instagram fa-2x" style={{color: "#f7f9fc"}}></i></Link>
  <Link> <i class="fa-brands fa-twitter fa-2x" style={{color: "#f7f7f8"}}></i>  </Link>
  <Link><i class="fa-brands fa-facebook-f fa-2x" style={{color: "#fafcff"}}></i></Link>
  <Link><i class="fa-brands fa-youtube fa-2x" style={{color: "#f1f4f8"}}></i></Link>
</div>

      </div>
      </div>
      <p style={{textAlign:"center",marginTop:"4%",fontSize:"20px"}}>Copyright &#169; 2023 Media Player.Built with React</p>
   </div>
  )
}

export default Footer