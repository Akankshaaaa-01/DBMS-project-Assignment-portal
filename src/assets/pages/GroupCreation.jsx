import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const GroupCreation = () => {
  const [groupName, setGroupName] = useState('')
  const [groupCode, setGroupCode] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Generate random code if empty
    const finalCode = groupCode || Math.random().toString(36).substring(2, 8).toUpperCase()
    console.log('Created group:', { groupName, groupCode: finalCode })
    navigate('/teacher')
  }

  return (
    <div className="form-container">
      <h2>Create New Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Group Code (optional)</label>
          <input
            type="text"
            value={groupCode}
            onChange={(e) => setGroupCode(e.target.value)}
            placeholder="Leave blank to auto-generate"
          />
        </div>

        <button type="submit" className="submit-button">
          Create Group
        </button>
      </form>
    </div>
  )
}

export default GroupCreation