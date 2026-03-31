

function Item({text,onDelete}) {
  return (
   <div>
      <p>{text}</p>
      <button onClick={onDelete} >Delete</button>
   </div>
  )
}
export default Item;