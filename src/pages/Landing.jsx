import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/headphone.jpg";
import cardImg from "../assets/card1.avif";
import card1Img from "../assets/cart2.jpg";
import card2Img from "../assets/card3.jpg";
import { Card } from "react-bootstrap";
Card;

const Landing = () => {
  return (
    <div style={{ paddingTop: "80px" }} className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3 className="fs-1 fw-bold mb-5 text-uppercase">
            {" "}
            Media <span className="text-warning">player</span>
          </h3>
          <p style={{textAlign:'justify'}} className=" fs-5 text-justify mb-5" >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quae
            a tenetur sunt vitae aut. Nulla eveniet esse consequuntur incidunt.
            Minus illo quasi repellat quibusdam doloribus consequuntur porro
            soluta eos?
          </p>
          <Link to="/home" className="btn btn-info fs-5">
            Get Started
          </Link>
        </div>
        <div className="col"></div>
        {/*  Landing image */}
        <div className="col-lg-6">
          <img src={LandingImg} className=" m5-5 img-fluid" alt=" noimage" />
        </div>
      </div>

      {/* featurws */}
      <div className="my-5 ">
        <h3 className="text-center fs-1 fw-bold ">Featurs</h3>
        <div className="row mt-5">
          <div className=" d-flex mb-4 justify-content-center col-lg-4">
            <Card style={{ width: "85%" }}>
              <Card.Img variant="top" src={card1Img} height={"250px"} />
              <Card.Body>
                <Card.Title>drums</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="d-flex mb-4 justify-content-center col-lg-4">
            <Card style={{ width: "85%" }}>
              <Card.Img variant="top" src={card2Img} height={"250px"} />
              <Card.Body>
                <Card.Title>drums</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className=" d-flex mb-4 justify-content-center col-lg-4">
            <Card style={{ width: "85%" }}>
              <Card.Img variant="top" src={cardImg} height={"250px"} />
              <Card.Body>
                <Card.Title>drums</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* last */}
      <div className="my-5 row align-items-center border rounded p-5 ms-1 container">
        <div className="col-lg-5">
          <h2 className="mb-3 fs-2 fw-bold text-warning">Simple Fast And Powerfull</h2>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bold">Play Everything : </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            veritatis ipsum minus? Voluptate, deleniti beatae. Et neque
            recusandae doloribus sequi maxime iste consequuntur dicta animi
            totam sint. Quidem, aspernatur consequuntur.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bold">Play Everything : </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            veritatis ipsum minus? Voluptate, deleniti beatae. Et neque
            recusandae doloribus sequi maxime iste consequuntur dicta animi
            totam sint. Quidem, aspernatur consequuntur.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bold">Play Everything : </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            veritatis ipsum minus? Voluptate, deleniti beatae. Et neque
            recusandae doloribus sequi maxime iste consequuntur dicta animi
            totam sint. Quidem, aspernatur consequuntur.
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/OdQrlp3uYQM"
            title="Solo Leveling Season 2 | OFFICIAL TEASER TRAILER"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
