import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  // Minimal loading state with inline CSS
  if (loading) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        fontSize: '1.2rem',
        color: '#555'
      }}>
        Loading...
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;
  
  return children;
}