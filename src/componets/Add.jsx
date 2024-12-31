import React, { useState } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import { saveVedioAPI } from "../pages/services/allAPI";

const Add = ( {setAddResponseFromHome}) => {
  //inavide youtube link
  const [invalideYoutubeLInk, setInvalideYoutubeLInk] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgUrl: "",
    youtubeLink: "",
  });

  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  step up  embebbed code geting code from yoytube link
  const extractEmbeddedYoutubeLink = (ueasrInputYoutubeLink) => {
    if (ueasrInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      console.log(ueasrInputYoutubeLink.split("v=")[1].slice(0, 11));

      const videoId = ueasrInputYoutubeLink.split("v=")[1].slice(0, 11);
      setInvalideYoutubeLInk(false);
      setVideoDetails({
        ...videoDetails,
        youtubeLink: `https://www.youtube.com/embed/${videoId}`,
      });
    } else {
      setInvalideYoutubeLInk(true);
      setVideoDetails({ ...videoDetails, youtubeLink: "" });
    }
  };

  const handleUploadVedio = async () => {
    // object destrecting..

    const { caption, imgUrl, youtubeLink } = videoDetails;  
    if (caption && imgUrl && youtubeLink) {

      // alert('successs')

      try{
        const result =await saveVedioAPI(videoDetails)
        console.log(result)
       
        if(result.status>=200 && result.status<300){
          alert("video upload successfully..")
          handleClose()

          //pass the result to view content
          setAddResponseFromHome(result)

        }else{
          console.log(result);
          
        }

      }catch( err){
          console.log(err);
          
      }
      
    } else{
      alert('please fill the form')
    }
  };

  return (
    <>
      <div className="d-flex ">
        <h5 className="me-4 fs-3  fw-bolder text-uppercase">Upload New Video</h5>
        <button
          onClick={handleShow}
          style={{ width: "40px", height: "40px" }}
          className=" btn btn-warning fw-bolder fs-5 rounded-circle "
        >
          +
        </button>
      </div>

      {/* model */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <FloatingLabel controlId="floatingCaption" label="Caption">
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Cpation"
              />
            </FloatingLabel>
          </div>
          <div className="mb-3">
            <FloatingLabel controlId="floatingCaption" label="Video Image URL">
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imgUrl: e.target.value })
                }
                type="text"

                placeholder="Cpation"
              />
            </FloatingLabel>
          </div>
          <div className="mb-3">
            <FloatingLabel
              controlId="floatingCaption"
              label=" youTube viedo Link"
            >
              <Form.Control
                onChange={(e) => extractEmbeddedYoutubeLink(e.target.value)}
                type="text"
                placeholder="Cpation"
              />
            </FloatingLabel>
            {invalideYoutubeLInk && (
              <div className="text-danger"> invalid youtube link </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUploadVedio}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
