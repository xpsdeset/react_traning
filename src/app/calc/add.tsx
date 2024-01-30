import React from "react"

interface props {
  num1: number
  num2: number
  color?: string
}

function Addition({ num1, num2, color }: props) {
  return <h1 style={{ color }}> The addition is {num1 + num2} </h1>
}

export default Addition
