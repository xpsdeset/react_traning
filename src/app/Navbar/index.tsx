import React from "react"
import "./style.css"

interface props {
  backBtn?: boolean
  title: string
}

function Navbar({ backBtn, title }: props) {
  return (
    <div className="navbar">
      {backBtn && <button> back </button>}
      {title}
    </div>
  )
}

export default Navbar
