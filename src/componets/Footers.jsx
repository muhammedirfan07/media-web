import React from "react";
import { Link } from "react-router-dom";
const Footers = () => {
  return (
    <div style={{ height: "250px" ,paddingTop:"60px"}} className="mt-5 px-3 w-100 ">
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{width:"30%"}}>
            <h4 className="fw-bold mb-3">
            <i class="fa-solid fa-music me-3"></i>
            media player
            </h4>
            <p>
            A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components .
            </p>
            <p> Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className="d-flex flex-column">
            <h4 className="fw-bold mb-3">Link</h4>
            <Link className="mb-3" to={"/"} style={{textDecoration:"none",color:"white"}}>Landing Page </Link>
            <Link className="mb-3" to={"/home"} style={{textDecoration:"none",color:"white"}}>Home Page </Link>
            <Link className="mb-3" to={"/history"} style={{textDecoration:"none",color:"white"}}>History Page </Link>
        </div>
        {/* guide */}
        <div className="d-flex flex-column">
            <h4 className="fw-bold mb-3">Guide</h4>
            <a className="mb-3" style={{textDecoration:"none",color:"white"}} target="_blind" href="https://react.dev/">React</a>
            <a className="mb-3" style={{textDecoration:"none",color:"white"}} target="_blind" href="https://reactrouter.com/">React Router</a>
            <a className="mb-3" style={{textDecoration:"none",color:"white"}} target="_blind" href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
        </div>
        {/* content */}
        <div className="d-flex flex-column">
            <h4 className="fw-bold mb-3">Contacts</h4>
            <div className="d-flex flex-row mb-3">
                <input className="form-control me-3" type="text" placeholder="enter your email.." />
                <button className="btn btn-info"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="https://x.com/?" target="_blind"><i  class="fa-brands fa-twitter"></i></a>
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="" target="_blind"><i class="fa-brands fa-instagram"></i></a>
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="" target="_blind"><i class="fa-brands fa-facebook"></i></a>
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="" target="_blind"><i class="fa-brands fa-github"></i></a>
              
            </div>
             
        </div>
      </div>
    </div>
  );
};

export default Footers;
