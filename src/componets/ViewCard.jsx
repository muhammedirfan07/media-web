import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import {saveHistoryAPI, videoDelectAPI } from '../pages/services/allAPI';


const ViewCard = ({displayData,setDelectViedoCard,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
  //display modal
  setShow(true)
  //store history in json
  const{caption,youtubeLink}= displayData
  const sysDateTime = new Date();
     console.log(sysDateTime);
     console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
  const timeStamp =sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
  const historyDetails ={caption,youtubeLink,timeStamp}

  try{
    await saveHistoryAPI(historyDetails)

  }catch(err){
    console.log(err);
    
  }
  // setShow(true)

  }

  const removeVideoCard = async (id)=>{
      try{
        const result= await videoDelectAPI(id)
        setDelectViedoCard(result)
        ViewCard()
  
      }catch(err){
        console.log(err);
        
      }
    }

  
  
  const videoCardDragStarted=(e,draggedVideoDetails)=>{
    console.log("the videoCardDragStarted 💗 💗"+draggedVideoDetails?.id)
    // shere data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(draggedVideoDetails))
  }

 
  
  return (
    
    <>
      <Card  draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)}  className='mt-3' style={{ width: '17.5rem' }}>
                <Card.Img className='mx-auto d-block' onClick={handleShow} height={'300px'} variant="top" src={displayData?.imgUrl} />
                <Card.Body>
                    <Card.Text className='d-flex justify-content-between'>
                        <p className='  pt-2' style={{color:'white', textWrap:"nowrap"}}>{displayData?.caption}</p>
                       {
                        !insideCategory && <button onClick={()=>removeVideoCard(displayData?.id)} className='btn btn-black text-danger ' ><i class="fa-solid fa-trash"></i></button>

                       } 
                    </Card.Text>
                </Card.Body>
            </Card>

    {/* Modal */}
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body ><iframe
            width="100%"
            height="450"
            src={`${displayData?.youtubeLink}?autopaly=1`}
            title="Solo Leveling Season 2 | OFFICIAL TEASER TRAILER"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe></Modal.Body>
        
      </Modal>
    </>
  )
  
}

export default ViewCard
