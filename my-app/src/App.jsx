import { useEffect, useState } from "react";

function App() {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")
  const [search,setSearch]= useState("")
  
  const filteredUsers = users.filter((user)=>{
    return user.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(()=>{
  const fetchUsers = async()=> {
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if(!res.ok){
        throw new Error("Failed to fetch data")
      }
      const data =await res.json()
        setUsers(data);
        setLoading(false);
    }
    catch(error){
        setError(error.message);
    }
    finally{
        setLoading(false)
    }
    }
    fetchUsers()
  },[])

  return (
    <div>
      <input
      type="text"
      placeholder="Search user"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error &&
      filteredUsers.map((user)=>(
        <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
