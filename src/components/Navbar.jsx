import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 id="title">lori and mark's homepage</h2>
      <p id="welcome">welcome to our little corner of the internet</p>

      <div className="nav-links">
        <Link to="/">home</Link>
        <Link to="/memories">memories</Link>
        <Link to="/letters">letters</Link>
        <Link to="/acads">acads</Link>
        <Link to="/about">about</Link>
      </div>
    </nav>
  )
}

export default Navbar