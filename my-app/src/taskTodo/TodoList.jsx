import React from 'react'
// import "./App.css"
import TodoItem from "./TodoItem"
function TodoList({TodoFilterList,TodoFilter,TodohandleToggle,TodohandleEdit,TodohandleDelete,TodotodoMessage}) {
  return (
    <div>
      {TodoFilterList.map((info)=>
          <div key={info.id} className={info.isCompleted ? "checkedChild2" : "unCheckedChild2"}>
            <div
                className={`childTwo 
                  ${info.isCompleted ? "done" : "pending"} 
                  ${TodoFilter === "completed" ? "completedView" : ""}
                  ${TodoFilter === "active" ? "activeView" : ""}
                `}
              >
            <TodoItem
              todo={info}
              handleToggle={TodohandleToggle}
              handleEdit={TodohandleEdit}
              handleDelete={TodohandleDelete}
            />
              </div>
          </div>
        )
        }
        {TodoFilterList.length === 0 && (
        <p className="emptyMessage">{TodotodoMessage()}</p>
          )}
    </div>
  )
}

export default TodoList