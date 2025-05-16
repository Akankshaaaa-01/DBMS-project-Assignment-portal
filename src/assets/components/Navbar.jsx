import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">EduPortal</Link>
      </div>
      
      <div className="navbar-links">
        {user ? (
          <>
            <span className="user-info">
              <span className="user-avatar">{user.avatar}</span>
              <span className="username">{user.username}</span>
              <span className={`user-role ${user.role}`}>
                {user.role.toUpperCase()}
              </span>
            </span>
            <button 
              onClick={() => {
                logout()
                navigate('/login')
              }}
              className="logout-btn"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar