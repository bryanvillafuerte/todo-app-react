import './TodoApp.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LogoutComponent from './LogoutComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import AuthProvider, { useAuth } from './security/AuthContext.jsx';
import PropTypes from 'prop-types';

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if(authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to='/login' />;
}

export function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/welcome/:username' element={
              <AuthenticatedRoute>
                <WelcomeComponent />
              </AuthenticatedRoute>
            } />
            <Route path='/todos' element={
              <AuthenticatedRoute>
                <ListTodosComponent />
              </AuthenticatedRoute>
            } />
            <Route path='/logout' element={
              <AuthenticatedRoute>
                <LogoutComponent />
              </AuthenticatedRoute>
            } />

            <Route path='*' element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired
}