import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const StudentDashboard = () => {
  const { user } = useAuth()

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Student Dashboard <span className="badge-student">👩‍🎓</span></h1>
        <p>Welcome, {user?.username}</p>
      </div>

      <div className="action-cards">
        <Link to="/join-group" className="card">
          <h3>Join Group</h3>
          <p>Enter class code</p>
          <div className="icon">🔗</div>
        </Link>

        <Link to="/submit-assignment" className="card">
          <h3>Submit Assignment</h3>
          <p>Upload your work</p>
          <div className="icon">📤</div>
        </Link>

        <Link to="/assignment-details" className="card">
          <h3>View Assignments</h3>
          <p>Check deadlines</p>
          <div className="icon">📅</div>
        </Link>
      </div>
    </div>
  )
}

export default StudentDashboard