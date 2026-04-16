import React, { useEffect, useState } from 'react'
import './App1.css'

function App1() {

  const[error,setError]=useState("")
  const[user,setUser]=useState([])
  const[loading,setLoading]=useState(true)
  const [search,setSearch]= useState("")


  const filteredUsers = user.filter((user)=>
     user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
  )

useEffect(()=>{
  const ApiFetchUser = async()=>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if(!res.ok){
        throw new Error("Failed to Fetch")
      }
      const data = await res.json()
      setUser(data)
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
    <div>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={handleInput}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
        {filteredUsers.map((Users)=>(
          <div key={Users.id}>
             <p>{Users.name}</p> 
             <p>{Users.email}</p> 
          </div>
        ))
        }
        {search && filteredUsers.length === 0 && !loading && !error && (
          <p>No users found</p>
        )}
    </div>
  )
}

export default App1