import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ViewCard from './ViewCard'
import { getAllVideoAPI, updateCatagoryAPI,saveVedioAPI } from '../pages/services/allAPI'




const Views = ( {addResponseFromHome,delectResponceFromCatagory,setDelectResponceFromView}) => {

  const [delectViedoCard,setDelectViedoCard]=useState("")
  const [allVideos,setallVideos]=useState([]);
  console.log(allVideos);
  
  useEffect(()=>{
    getAllVideo();
  },[addResponseFromHome,delectViedoCard,delectResponceFromCatagory])


  // uear adding data api geting
  const getAllVideo = async()=>{
    try{
        const result =await getAllVideoAPI()
         console.log(result)

        if(result.status>=200 && result.status<300){
          setallVideos(result.data);
          
        }else{
          console.log("All api failed");
          
        }
    }catch(err){
      console.log(err)
    }
  }

const dargOverView=(e)=>{
  e.preventDefault()
}
const droppingCategoryVideoStarted= async(e)=>{
  console.log("inside droppingCategoryVideoStarted😊😊😊");
  const{ video,catagoryDatails} = JSON.parse( e.dataTransfer.getData("dragData"))
  console.log(video,catagoryDatails);

  const updatecategoryVideoList= catagoryDatails?.allVideos?.filter(items=>items.id!==video?.id)
  const updateCategory ={...catagoryDatails,allVideos:updatecategoryVideoList}
  console.log(updateCategory);
  
  // updating the category by delect video from category
   const results= await updateCatagoryAPI(updateCategory)

  // use  state lifting to communicate dat from view to category
   setDelectResponceFromView(results)
  // use api to add upload video 
     await saveVedioAPI(video)
  // agine getAllVideos fuction call
   getAllVideo()
  
  
}
 

  return (
    <>
      <Row droppable="true" onDragOver={dargOverView} onDrop={e=>droppingCategoryVideoStarted(e)} >
      {
            allVideos?.length>0?
            allVideos.map(vedio=>(
              <Col key={vedio?.id}  className='mb-4 p-1 d-flex justify-content-center' sm={12} md={6} lg={4}>
               < ViewCard setDelectViedoCard={setDelectViedoCard} displayData={vedio}/>
               </Col>
            ))
            :
            <div className='fw-bold text-danger' >NO video are Uploaded!..</div>
      }
      </Row> 
    </>
  )
}

export default Views