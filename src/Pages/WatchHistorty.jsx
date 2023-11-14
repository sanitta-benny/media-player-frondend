import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteCategory, deleteHistory, getAllHistory } from '../Services/allAPI'
import {Row,Col} from 'react-bootstrap'

function WatchHistorty() {
  const [history, setHistory]=useState([])

const getHistory = async()=>{
  const {data} =await getAllHistory()
  console.log(data)
  setHistory(data)
}

/* deelete cateogry */
const handleDelete= async(id)=>{
  const response = await deleteCategory(id)
  console.log(response)
 
}

useEffect(()=>{
  getHistory()
},[])

  return (
    <div className='ms-5 me-5 mt-5'>
    <div style={{display:"flex",justifyContent:'space-between'}}>
        <h3>Watch History</h3>
        <Link to={"/home"} style={{textDecoration:"none"}}><h5><i class="fa-solid fa-arrow-left fa-lg" style={{color: "#fcfcfd"}}></i><span className='ps-2'>Back To Home</span></h5></Link>
    </div>

      <div style={{display:'flex',justifyContent:"space-evenly"}}>
         <Col></Col>
      <Table striped bordered hover>
      <thead>
       <tr>
          <th>#</th>
          <th>caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {history.length>0?
       history.map((item)=>(
        <tr>
        <td>{item.id}</td>
        <td>{item.caption}</td>
        <td><a href={item.embedLink}>{item.embedLink}</a></td>
        <td>{item.timeStamp}</td>
        <td> <button onClick={()=>handleDelete(item?.id)}  className='btn '><i class="fa-solid fa-trash fa-lg" style={{color: "#fbfcfe"}}></i></button></td>
      </tr> 
       ))
       
        : <p>nothing to display</p>}
       
          
      </tbody>
    </Table>
      </div>
  
    </div>
  )
}

export default WatchHistorty