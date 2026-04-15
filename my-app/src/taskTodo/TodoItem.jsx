function TodoItem({ todo, handleToggle, handleEdit, handleDelete }) {
  return (
    <>
      <p>{todo.textofTodo}</p>

      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleToggle(todo.id)}
      />

      <button type="button" onClick={() => handleEdit(todo)}>
        UPDATE
      </button>

      <button type="button" onClick={() => handleDelete(todo.id)}>
        DELETE
      </button>
    </>
  )
}

export default TodoItem