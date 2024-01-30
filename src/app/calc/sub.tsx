import React from "react"

interface props {
  num1: number
  num2: number
  color?: string
}

function Subtraction({ num1, num2 }: props) {
  let val = num1 - num2
  return (
    <h1 style={{ color: val > 0 ? "green" : "red" }}>
      {" "}
      The subtraction is {val}{" "}
    </h1>
  )
}

export default Subtraction
