import Item from "./Message" 

export default function InputBox({ text, input, addButton }){  
return(
  <div>
    <input type="text" placeholder="enter text" value={text} onChange={input}/>
    <button onClick={addButton}>ADD</button>
  </div>

)
}