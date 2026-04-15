import React from 'react'
import "./App.css"
import FilterBar from './FilterBar'
function TodoInput({Todotext,statesetText,TodoList,TodoFilter,statesetFilter,TodoHandleClearALL}) {
  return (
    <div className="childOne">
        <input type="text" value={Todotext} placeholder="Enter Text" 
          onChange={(e)=>statesetText(e.target.value)
          }
        />
        <button type="submit">
          Enter
        </button>
        <FilterBar
            TodoList={TodoList}
            TodoFilter={TodoFilter}
            statesetFilter={statesetFilter}
            TodoHandleClearALL={TodoHandleClearALL}
        />
        </div>
  )
}

export default TodoInput