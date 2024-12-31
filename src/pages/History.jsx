import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI,  getAllHistoryAPI  } from './services/allAPI'
const History = () => {

  const [allVideoHistory,setAllVideoHistory] =useState([])

  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async ()=>{
    try{
      const result = await getAllHistoryAPI()
      console.log(result)
      if(result.status>=200 && result.status<300){
        console.log(result.data)
        setAllVideoHistory(result.data) 
      }else{
        console.log(result);
        
      }
    }catch(err){
      console.log(err);
      
    }
  }

  const removeHistory = async (id)=>{
    try{
      await deleteHistoryAPI(id)
      getAllHistory()

    }catch(err){
      console.log(err);
      
    }
  }


  return (
    <div style={{paddingTop:"80px"}}> 
    
      <div className='d-flex justify-content-between container'>
        <h3 className=' fw-bolder text-uppercase'>Watch History</h3>
        <Link  className='fs-5 fw-bold ms-3 text-uppercase'  to={"/home"}>back to home
        </Link>
      </div>
      <table className=' container w-100 table my-5'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>TimeStamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
          {
            allVideoHistory?.length>0?allVideoHistory?.map((videoDetailes,index)=>(
            <tr key={videoDetailes?.id}>
              <td>{index+1}</td>
              <td>{videoDetailes?.caption}</td>
              <td>{videoDetailes?.youtubeLink}</td>
              <td>{videoDetailes?.timeStamp} </td>
              <td><button onClick={()=>removeHistory(videoDetailes?.id)} className='btn btn-black text-danger' ><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            ))
            :
            <div className=' ms-2 fw-bolder text-danger'> NO VIEW DETAILS </div>

           }
          </tbody>
        </table>
    </div>
  )
}

export default History