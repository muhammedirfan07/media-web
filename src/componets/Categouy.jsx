import React, { useEffect } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
import { getAllCatagoryAPI, saveCategoryAPI,deleteCatagoryAPI, updateCatagoryAPI,videoDelectAPI } from "../pages/services/allAPI";
import ViewCard from "./ViewCard";


const Categouy = ({setDelectResponceFromCatagory,delectResponceFromView}) => {
  const [show, setShow] = useState(false);

  const [catagoryName,setCatagoryName]=useState("")
  const [allCatagorys,setAllCatagorys]= useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(()=>{
   getAllCatagorys()
},[delectResponceFromView])


const handleSaveCategory = async ()=>{
  if(catagoryName){
     const catagorydatails ={catagoryName,allVideos:[]}
    //  console.log(catagorydatails);
     
         try{
            await saveCategoryAPI(catagorydatails)
             alert("Category Careted")
             getAllCatagorys()
             handleClose()
         }catch(err){
           console.log(err)
         }
  }else{
    alert("plz add category..!")
  }
}

const getAllCatagorys =async()=>{
  try{
    const result= await getAllCatagoryAPI()
    console.log(result);
    
    if( result.status>=200 && result.status<300){
      setAllCatagorys(result.data)
    }
  }catch(err){
    console.log(err);
    
  }
}
console.log(allCatagorys);

const removeCatagory = async(id)=>{
    try{
        await deleteCatagoryAPI(id)
        getAllCatagorys()
    }catch(err){
        console.log(err);
        
    }
}

const dragOvercategory=(e)=>{
  e.preventDefault()

}  

const videoCardDropFromCartegory= async(e,catagoryDatails)=>{
  console.log("inside the videoCardDropFromCartegory💗💗💗");
  // console.log(catagoryDatails); 

    // the drop data getting in a category ....
    const resultVideoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(resultVideoDetails);

  //update category by add video to allVideos  array
  catagoryDatails.allVideos.push(resultVideoDetails)
  console.log(catagoryDatails);

  //Api calling
   await updateCatagoryAPI(catagoryDatails) 
   getAllCatagorys()
   const result=await videoDelectAPI(resultVideoDetails?.id)
   setDelectResponceFromCatagory(result) 
}

// draging video ofrom category...
const darggingCategoryVideoStarted = (e,dargcategoryVideoDetails,catagoryDatails)=>{
   console.log("inside darggingCategoryVideoStarted 😊😊");
   let dragData={video:dargcategoryVideoDetails,catagoryDatails}
   e.dataTransfer.setData("dragData",JSON.stringify(dragData))
   
}

  return (
    <>
      <div className="my-3 d-flex justify-content-between align-items-center">
        <h5 className="me-4 fs-3 fw-bold"> All Category </h5>
        <button
          onClick={handleShow}
          style={{ width: "40px", height: "40px" }}
          className=" btn btn-info fw-bolder fs-5 rounded-circle "
        >
          +
        </button>
      </div>

      {/*Dispalay all category  */}
      <div className="container-fulid my-3">
        {/* signle catgory view */}
        {
        allCatagorys?.length >0 ? 
          allCatagorys?.map(catagoryDatails => (
            <div droppable="true" onDragOver={dragOvercategory} onDrop={e=>videoCardDropFromCartegory(e,catagoryDatails)}   key={catagoryDatails?.id} className="border p-3 mb-3 rounded">
              <div className="d-flex justify-content-between mb-3">
                <h5>{catagoryDatails?.catagoryName}</h5>
                <button onClick={()=>removeCatagory(catagoryDatails?.id)} className="btn btn-black text-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
              {/* dispaly categorys */}
              <div className="row mt-2">
               {
                catagoryDatails?.allVideos?.length>0 &&
                catagoryDatails?.allVideos?.map(video=>(
                  <div draggable={true} onDragStart={e=>darggingCategoryVideoStarted(e,video,catagoryDatails)} key={video?.id} className="col lg-4">
                    {/* video cards */}
                    <ViewCard  insideCategory={true} displayData={video}/>
                  </div>

                )) 
               }
              </div>
            </div>
          ))
         
        : 
          <div className="text-danger">no categories are add yet...</div>
        }
      </div>

      {/* modal */}
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Catagorys !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel
              controlId="floatingCategoryName"
              label="Category Name"
            >
              <Form.Control
                onChange={(e) => setCatagoryName(e.target.value)}
                type="text"
                placeholder="Category Name"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Categouy;
