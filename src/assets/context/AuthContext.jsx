import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Initialize from localStorage if available
    const savedUser = localStorage.getItem('eduportal_user')
    return savedUser ? JSON.parse(savedUser) : null
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const login = async ({ username, password }) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const testUsers = {
        teacher1: { 
          username: 'teacher1', 
          role: 'teacher', 
          password: 'pass123',
          avatar: '👨‍🏫'
        },
        student1: { 
          username: 'student1', 
          role: 'student', 
          password: 'stud123',
          avatar: '👩‍🎓'
        }
      }
      
      if (testUsers[username]?.password === password) {
        const userData = testUsers[username]
        setUser(userData)
        localStorage.setItem('eduportal_user', JSON.stringify(userData))
        return { success: true, user: userData }
      }
      return { success: false, error: 'Invalid credentials' }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('eduportal_user')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}