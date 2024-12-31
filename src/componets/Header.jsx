import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar style={{zIndex:1}} className="bg-info">
      <Container>
        <Link to={"/"} style={{textDecoration:'none'}}>
        <Navbar.Brand style={{color:"white"}} className='fs-4 fw-bolder'>
        <i class="fa-solid fa-music me-3"></i>
          media player
        </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>


  )
}

export default Header