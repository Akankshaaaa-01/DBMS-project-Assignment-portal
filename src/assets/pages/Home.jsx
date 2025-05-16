// src/assets/pages/Home.jsx
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to EduPortal</h1>
        <p>Manage assignments and classrooms with ease</p>
        
        {user ? (
          <div className="user-welcome">
            <p>Welcome back, {user.username}!</p>
            <Link 
              to={user.role === 'teacher' ? '/teacher' : '/student'} 
              className="cta-button"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="auth-options">
            <Link to="/login" className="cta-button">
              Teacher Login
            </Link>
            <Link to="/login" className="cta-button secondary">
              Student Login
            </Link>
          </div>
        )}
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <h3>For Teachers</h3>
          <ul>
            <li>Create and manage assignments</li>
            <li>Organize student groups</li>
            <li>Track submissions</li>
          </ul>
        </div>
        
        <div className="feature-card">
          <h3>For Students</h3>
          <ul>
            <li>Submit assignments</li>
            <li>Join class groups</li>
            <li>Check deadlines</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home