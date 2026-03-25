import { useState } from "react"

export default function App() {
  let txt="manoj"
  const [text,setText]=useState("manoj")
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={()=>setText(text?"":"manoj")} >{text ? "Hide" : "Show"}</button>
    </div>
  );
}