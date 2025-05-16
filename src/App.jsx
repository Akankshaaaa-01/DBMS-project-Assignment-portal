import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './assets/components/ProtectedRoute'
import Login from './assets/pages/Login'
import TeacherDashboard from './assets/pages/TeacherDashboard'
import StudentDashboard from './assets/pages/StudentDashboard'
import GroupCreation from './assets/pages/GroupCreation'
import AssignmentUpload from './assets/pages/AssignmentUpload'
import SubmitAssignment from './assets/pages/SubmitAssignment'
import JoinGroup from './assets/pages/JoinGroup'
import AssignmentDetails from './assets/pages/AssignmentDetails'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Make login the root route */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Teacher Routes */}
          <Route path="/teacher" element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }/>
          <Route path="/create-group" element={
            <ProtectedRoute role="teacher">
              <GroupCreation />
            </ProtectedRoute>
          }/>
          <Route path="/create-assignment" element={
            <ProtectedRoute role="teacher">
              <AssignmentUpload />
            </ProtectedRoute>
          }/>

          {/* Protected Student Routes */}
          <Route path="/student" element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }/>
          <Route path="/join-group" element={
            <ProtectedRoute role="student">
              <JoinGroup />
            </ProtectedRoute>
          }/>
          <Route path="/submit-assignment" element={
            <ProtectedRoute role="student">
              <SubmitAssignment />
            </ProtectedRoute>
          }/>

          {/* Shared Protected Routes */}
          <Route path="/assignment-details" element={
            <ProtectedRoute>
              <AssignmentDetails />
            </ProtectedRoute>
          }/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}