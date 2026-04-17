import React, { useEffect, useState } from 'react'
import './App1.css'

function App1() {

  const[error,setError]=useState("")
  const[users,setUsers]=useState([])
  const[loading,setLoading]=useState(true)
  const [search,setSearch]= useState("")
  const [debounce,setDebounce]=useState("")

  const filteredUsers = users.filter((user)=>
     user.name.toLowerCase().includes(debounce.toLowerCase()) || user.email.toLowerCase().includes(debounce.toLowerCase())
  )

  useEffect(()=>{
    const timer =setTimeout(()=>{
        setDebounce(search)
    },500)
    return ()=>{
      clearTimeout(timer)
    }
    },[search]) 

  useEffect(()=>{
  const ApiFetchUser = async()=>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if(!res.ok){
        throw new Error("Failed to Fetch")
      }
      const data = await res.json()
      setUsers(data)
    }
    catch(error){
      setError(error.message)
    }
    finally{
      setLoading(false)
    }
  }
  ApiFetchUser()
  },[])

  const handleInput =(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={handleInput}
      />
      <div className="cards">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
        {filteredUsers.map((Users)=>(
          <div key={Users.id} className="items">
             <p>{Users.name}</p> 
             <p>{Users.email}</p> 
          </div>
        ))
        }
        {search && filteredUsers.length === 0 && !loading && !error && (
          <p>No users found</p>
        )}
    </div>
    </div>
  )
}
export default App1