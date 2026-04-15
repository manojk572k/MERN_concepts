import React from 'react'
import "./App.css"
function FilterBar({TodoList,TodoFilter,statesetFilter,TodoHandleClearALL}) {
  return (
    <>
      {TodoList.length===0 ?<p>No items added</p>
         : <p>Total items : {TodoList.length}</p>
        }
        <button type="button" className={`filter all ${TodoFilter === "all" ? "all" : ""}`} onClick={()=>statesetFilter("all")}>
          ALL
        </button>
        <button type="button" className={`filter active ${TodoFilter === "active" ? "active" : ""}`} onClick={()=>statesetFilter("active")}>
          Active
        </button>
        <button type="button" className={`filter completed ${TodoFilter === "completed" ? "completed" : ""}`}  onClick={()=>{statesetFilter("completed")}}>
          Completed
        </button>
        <button type="button" onClick={TodoHandleClearALL}>
          Clear ALL
        </button>
    </>
  )
}

export default FilterBar