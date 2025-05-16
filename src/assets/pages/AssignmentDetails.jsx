import './List.css'

const AssignmentDetails = () => {
  // Mock data - replace with API call
  const assignments = [
    {
      id: 1,
      title: 'Math Homework',
      deadline: '2023-06-15',
      status: 'Submitted',
      grade: 'A'
    },
    {
      id: 2,
      title: 'Science Project',
      deadline: '2023-06-20',
      status: 'Pending',
      grade: null
    }
  ]

  return (
    <div className="list-container">
      <h2>Assignment Details</h2>
      <div className="assignment-list">
        {assignments.map(assignment => (
          <div key={assignment.id} className="assignment-card">
            <h3>{assignment.title}</h3>
            <p>Due: {assignment.deadline}</p>
            <p>Status: <span className={`status-${assignment.status.toLowerCase()}`}>
              {assignment.status}
            </span></p>
            {assignment.grade && (
              <p>Grade: <span className="grade">{assignment.grade}</span></p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AssignmentDetails