import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, loading } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { success, error, user } = await login({ username, password })
    
    if (success) {
      navigate(user.role === 'teacher' ? '/teacher' : '/student')
    } else {
      setError(error || 'Login failed. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome to EduPortal</h2>
          <p>Please sign in to continue</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="login-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : 'Sign In'}
          </button>
        </form>

        <div className="demo-credentials">
          <h4>Demo Accounts:</h4>
          <div className="demo-account">
            <span className="avatar">👨‍🏫</span>
            <div>
              <p>Teacher Account</p>
              <p>Username: teacher1</p>
              <p>Password: pass123</p>
            </div>
          </div>
          <div className="demo-account">
            <span className="avatar">👩‍🎓</span>
            <div>
              <p>Student Account</p>
              <p>Username: student1</p>
              <p>Password: stud123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login