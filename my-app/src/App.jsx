import { useState } from "react"
import "./App.css"
function App() {
  const[text,setText]=useState("")
  const[list,setList]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim()=="")return
    setList((prevList)=>{
      const update=[...prevList, text]
      return [...new Set(update)]
      })
    setText("")
  }
  
  const handleDelete =(index)=>{
    setList((prevList)=>prevList.filter((_,i)=> i!==index))
  }

  const handleClearALL=()=>{
    setList([])
    setText("")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="childOne">
        <input type="text" value={text} placeholder="Enter Text" 
          onChange={(e)=>setText(e.target.value)
          }
        />
        <button type="submit">
          Enter
        </button>
        {list.length===0 ?<p>No items added</p>
         : <p>Total items :{list.length}</p>
        }
        <button type="button" onClick={handleClearALL}>
          Clear ALL
        </button>
        </div>
        {list.map((info,index)=>
          <div key={index} className="childTwo">
            <ul>
              <li>{info}</li>
            </ul>
            <button type="button" onClick={()=>handleDelete(index)}>
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
