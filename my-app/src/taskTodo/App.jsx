import { useEffect, useState } from "react"
import "./App.css"
function App() {
  const[text,setText]=useState("")
  const[list,setList]=useState(()=>{
    const stored = localStorage.getItem("list");
    return stored ? JSON.parse(stored) : [];
  })

  const [filter, setFilter] = useState(() => {
    const filterStored = localStorage.getItem("filter")
    return filterStored ? JSON.parse(filterStored) : "all"
  })

  const [editId,setEditId] = useState(()=>{
    const stored = localStorage.getItem("editId");
    return stored ? JSON.parse(stored) : null;
  })

  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));
    localStorage.setItem("filter",JSON.stringify(filter));
    localStorage.setItem("editId",JSON.stringify(editId));
  },[list, filter ,editId])

  const filteredList = list.filter((item) => {
   if(filter==="active"){
    return item.isCompleted === false
   } 
   else if(filter === "completed"){
    return item.isCompleted === true 
   }
   return true 
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim()=="")return

    if (editId !== null) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === editId
          ? { ...item, textofTodo: text }
          : item
      )
    )
    setEditId(null)
  } else {
    const newTodo ={
      id:Date.now(),
      textofTodo:text,
      isCompleted:false
    }
    setList((prevList) => [...prevList, newTodo])
  }
    setText("")
  }
  
    const handleEdit =(todo)=>{
       setText(todo.textofTodo)
      setEditId(text)
      setEditId(todo.id)
  }

  const handleDelete =(id)=>{
    setList((prevList)=>prevList.filter((k,i)=> k!==id))
  }

  const handleClearALL=()=>{
    setList([])
    setText("")
  }

  const handleToggle=(id)=>{
      setList((prevList)=>
      prevList.map((item)=>
        item.id === id
        ? {...item,isCompleted: !item.isCompleted}
        :item
      )
      )
  }
 const todoMessage = () => {
  if (list.length === 0) {
    return "No todos added"
  }

  if (filter === "active" && filteredList.length === 0) {
    return "No active tasks"
  }

  if (filter === "completed" && filteredList.length === 0) {
    return "No completed tasks"
  }

  return ""
  }



  return (
      <div className="body">
        <h2>Todo List</h2>
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
         : <p>Total items : {list.length}</p>
        }
        <button type="button" className={`filter all ${filter === "all" ? "all" : ""}`} onClick={()=>setFilter("all")}>
          ALL
        </button>
        <button type="button" className={`filter active ${filter === "active" ? "active" : ""}`} onClick={()=>setFilter("active")}>
          Active
        </button>
        <button type="button" className={`filter completed ${filter === "completed" ? "completed" : ""}`}  onClick={()=>{setFilter("completed")}}>
          Completed
        </button>
        <button type="button" onClick={handleClearALL}>
          Clear ALL
        </button>
        </div>
        
        <div className="counts">
        <p>Total: {list.length} </p>
        <p>Active: {list.filter(item=>!item.isCompleted).length }</p>
        <p>Completed: {list.filter(item=>item.isCompleted).length}</p>
        </div>
        

        {filteredList.map((info)=>

          <div key={info.id} className={info.isCompleted ? "checkedChild2" : "unCheckedChild2"}>
            <div
                className={`childTwo 
                  ${info.isCompleted ? "done" : "pending"} 
                  ${filter === "completed" ? "completedView" : ""}
                  ${filter === "active" ? "activeView" : ""}
                `}
              >
            <p>{info.textofTodo}</p>
            <input 
             type="checkbox" 
             checked={info.isCompleted}
             onChange={() => handleToggle(info.id)}
            />
            <button type="button" onClick={()=>handleEdit(info)} >
            UPDATE
            </button>
            <button type="button" onClick={()=>handleDelete(info)}>
            DELETE
            </button>
              </div>
          </div>
        )
        }
        {filteredList.length === 0 && (
        <p className="emptyMessage">{todoMessage()}</p>
          )}

      </form>
    </div>
      </div>
  )
}

export default App
