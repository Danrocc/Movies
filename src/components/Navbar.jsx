import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import "./NavBar.css"

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <nav id="navbar">
        <h2>
            <Link to="/"><BiCameraMovie />Movies</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="O que veremos hoje?" 
            onChange={(e) => setSearch(e.target.value)}
            value={search}></input>
            <button type="submit"><BiSearchAlt2 /></button>
        </form>
    </nav>
  )
}

export default Navbar
