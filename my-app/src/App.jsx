import { useState } from "react"
import "./App.css"
function App() {
  const[text,setText]=useState("")
  const[list,setList]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim()=="")return
    setList([...list, text])
    setText("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="Enter Text" 
          onChange={(e)=>setText(e.target.value)
          }
        />
        <button type="submit">
          Enter
        </button>
        {list.map((info,index)=>
          <div key={index}>
            <p>
              {info}
            </p>
            <button onClick={()=>setList(list.filter((_, i) => i !== index))}>
              DELETE
            </button>
          </div>
        )
        }
      </form>
    </div>
  )
}

export default App
