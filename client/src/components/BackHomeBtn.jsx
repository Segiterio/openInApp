import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../pages/NotFoundStyle.css"

export const BackHomeBtn = () => {
  const navigate = useNavigate();
  return (
    <button className="back_btn hover:cursor-pointer" onClick={() => {
      navigate("/");
   }}>BACK TO HOMEPAGE</button>
  )
}
