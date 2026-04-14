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

  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));
    localStorage.setItem("filter",JSON.stringify(filter));
  },[list, filter])

  const filteredUsers = list.filter((item) => {
   if(filter=="active"){
    return item.isCompleted === false
   } 
   else if(filter == "completed"){
    return item.isCompleted === true
   }
   return true
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim()=="")return

    const newTodao ={
      id:Date.now(),
      textofTodo:text,
      isCompleted:false
    }

    setList((prevList)=>{
      const update=[...prevList, newTodao]
      return update
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

  const handleToggle=(id)=>{
      setList((prevList)=>
      prevList.map((item)=>
        item.id === id
        ? {...item,isCompleted: !item.isCompleted}
        :item
      )
      )
  }
  console.log(list)

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
        <button type="button" onClick={()=>setFilter("all")}>
          ALL
        </button>
        <button type="button" onClick={()=>setFilter("active")}>
          Active
        </button>
        <button type="button" onClick={()=>{setFilter("completed")}}>
          Completed
        </button>
        <button type="button" onClick={handleClearALL}>
          Clear ALL
        </button>
        </div>
        
        <div className="counts">
        <p>Total: {list.length}</p>
        <p>Active: {list.filter(item=>!item.isCompleted).length}</p>
        <p>Completed: {list.filter(item=>item.isCompleted).length}</p>
        </div>
        

        {filteredUsers.map((info,index)=>

          <div key={info.id} className={info.isCompleted ? "checkedChild2" : "unCheckedChild2"}>
            <p>{info.id}</p>
            <p>{info.textofTodo}</p>
            <input 
             type="checkbox" 
             checked={info.isCompleted}
             onChange={() => handleToggle(info.id)}
            />
            <button type="button" >
            UPDATE
            </button>
            <button type="button" onClick={()=>handleDelete(index)}>
            DELETE
            </button>
          </div>
        )
        }

      </form>
    </div>
      </div>
  )
}

export default App
