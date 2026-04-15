import { useEffect, useState } from "react"

import TodoInput from "./TodoInput" 
import "./App.css"
import TodoList from "./TodoList"
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
    setList((prevList)=>prevList.filter((k)=> k.id!==id))
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
      
        <TodoInput
            Todotext={text}
            statesetText={setText}
            TodoList={list}
            TodoFilter={filter}
            statesetFilter={setFilter}
            TodoHandleClearALL={handleClearALL}
        />
        
        <div className="counts">
        <p>Total: {list.length} </p>
        <p>Active: {list.filter(item=>!item.isCompleted).length }</p>
        <p>Completed: {list.filter(item=>item.isCompleted).length}</p>
        </div>
        
          <TodoList 
          TodoFilterList={filteredList}
          TodoFilter={filter}
          TodohandleToggle={handleToggle}
          TodohandleEdit={handleEdit}
          TodohandleDelete={handleDelete}
          TodotodoMessage={todoMessage}
          />

      </form>
    </div>
      </div>
  )
}

export default App
