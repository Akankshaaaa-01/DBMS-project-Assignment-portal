import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const JoinGroup = () => {
  const [groupCode, setGroupCode] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Joined group with code:', groupCode)
    navigate('/student')
  }

  return (
    <div className="form-container">
      <h2>Join Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Group Code</label>
          <input
            type="text"
            value={groupCode}
            onChange={(e) => setGroupCode(e.target.value)}
            placeholder="Enter code provided by teacher"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Join Group
        </button>
      </form>
    </div>
  )
}

export default JoinGroup