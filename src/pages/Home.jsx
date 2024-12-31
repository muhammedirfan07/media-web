import React, { useState } from 'react'
import Add from '../componets/Add'
import { Link } from 'react-router-dom'
import Views from '../componets/Views'
import Categouy from '../componets/Categouy'



const Home = () => {
  const [delectResponceFromView,setDelectResponceFromView] =useState("")
  const [delectResponceFromCatagory,setDelectResponceFromCatagory] =useState("")
  const [addResponseFromHome,setAddResponseFromHome]=useState("")

  return (
    <div style={{paddingTop:"80px" }}>
      <div className='container-fluid px-5 d-flex justify-content-between '>
         <Add setAddResponseFromHome={setAddResponseFromHome}/>
         <Link className='fs-5 fw-bold text-uppercase ms-3' to={'/history'}>Wacth History</Link>
      </div>

      <div className= " row container-fluid  my-5 ">
        <div className="col-lg-6 pe-2  ">
          <h3 className='pt-3 mb-4 fw-bold fs-3  '> All Videos </h3>
          <Views  setDelectResponceFromView={setDelectResponceFromView} delectResponceFromCatagory={delectResponceFromCatagory} addResponseFromHome={addResponseFromHome} />
        </div>
       {/* <div className='col-1'></div> */}
        <div  className="col-lg-6 p-2  ">
        <Categouy delectResponceFromView={delectResponceFromView}  setDelectResponceFromCatagory={setDelectResponceFromCatagory} />
        </div>

      </div>
    </div>
  )
}

export default Home