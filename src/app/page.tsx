"use client"
import { useState } from "react"
import Addition from "./calc/add"
import Subtraction from "./calc/sub"
import Navbar from "./Navbar/index"

export default function Home() {
  let name = "Smita"
  let [num1, setNum1] = useState(5)
  let [num2, setNum2] = useState(10)
  let [error, setError] = useState("")
  let updateNum1 = (e) => {
    let str = e.currentTarget.value
    if (str === "") {
      setNum1(0)
      setError("Please enter num1")
    } else {
      setNum1(parseInt(str))
      setError("")
    }
  }

  return (
    <main>
      <Navbar title="Add task" backBtn={true} />
      <label>Num1</label>
      <input value={num1} onChange={updateNum1} />
      <hr />
      <label>Num1</label>
      <input
        value={num2}
        onChange={(e) => setNum2(parseInt(e.currentTarget.value))}
      />
      <Addition num1={num1} num2={num2} />
      <Subtraction num1={num1} num2={num2} />
      <h3> {error} </h3>
    </main>
  )
}
