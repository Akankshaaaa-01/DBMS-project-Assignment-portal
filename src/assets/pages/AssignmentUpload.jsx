import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const AssignmentUpload = () => {
  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Assignment created:', { title, deadline, description })
    navigate('/teacher')
  }

  return (
    <div className="form-container">
      <h2>Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Deadline</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
          />
        </div>

        <button type="submit" className="submit-button">
          Create Assignment
        </button>
      </form>
    </div>
  )
}

export default AssignmentUpload