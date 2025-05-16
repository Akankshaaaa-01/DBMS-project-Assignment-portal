import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const TeacherDashboard = () => {
  const { user } = useAuth()

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Teacher Dashboard <span className="badge-teacher">👨‍🏫</span></h1>
        <p>Welcome back, {user?.username}</p>
      </div>

      <div className="action-cards">
        <Link to="/create-group" className="card">
          <h3>Create Group</h3>
          <p>Setup new student groups</p>
          <div className="icon">➕</div>
        </Link>

        <Link to="/create-assignment" className="card">
          <h3>Create Assignment</h3>
          <p>Post new assignments</p>
          <div className="icon">📝</div>
        </Link>

        <Link to="/assignment-details" className="card">
          <h3>View Submissions</h3>
          <p>Check student work</p>
          <div className="icon">📚</div>
        </Link>
      </div>
    </div>
  )
}

export default TeacherDashboard