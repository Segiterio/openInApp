import React from 'react'
import "./NotFoundStyle.css"
import Scarecrow from "../assets/Scarecrow.png"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
    <p className="not_found">404 Not Found</p>
    <div className="container">
      <div>
        <img src={Scarecrow} alt="Not_found" width="100%" />
      </div>

      <div className="content_container">
        <h1>I have bad news for you</h1>
        <p className="para">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button className="back_btn hover:cursor-pointer" onClick={() => {
           navigate("/");
        }}>BACK TO HOMEPAGE</button>
      </div>
    </div>
    <footer>
      <p>created by <span>Akash kumar</span></p>
    </footer>
  </div>

  )
}

export default NotFound