import { useState } from "react"
import Item from "./Message"
import InputBox from "./InputBox"

export default function App() {
const [text, setText] = useState("")
const [items, setItems] = useState([])
const handleDelete =(index)=>{
  setItems(items.filter((_,i)=>i!==index))
}
const handleAddButton=()=>{
  setItems([...items,text])
  setText("")
}
  return (
    <div>
        <InputBox 
          text={text}
          input={(e)=>setText(e.target.value)}
          addButton={handleAddButton}
        />
      {items.map((items,index)=>(
        <Item 
          key={index}
          text={items}
          onDelete={()=>handleDelete(index)}
        />
      )
      )}
    </div>
  );
}