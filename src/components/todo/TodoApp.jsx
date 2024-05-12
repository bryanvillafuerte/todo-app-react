import './TodoApp.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';

export function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/welcome/:username' element={<WelcomeComponent />} />
          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === 'bryanvillafuerte' && password === 'dummy') {
      console.log('Successful');
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      console.log('Failed');
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
      navigate('/login')
    }
  }

  return (
    <div className="Login">
      <h1>Please login</h1>
      {showSuccessMessage && <div className="successMessage">Authentication Successful!</div>}
      {showErrorMessage && <div className="errorMessage">Authentication failed. Please check your credentials.</div>}
      <div className="LoginForm">
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  const { username } = useParams();

  console.log(username);

  return (
    <div className="Welcome">
      <h1>Welcome to your To-do App, {username}!</h1>
      <div>Manage your tasks and stay productive.</div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>This page does not exist.</h1>
      <div>Apologies for the 404 error. Reach out to our team at +47 XXX XX XXX.</div>
    </div>
  );
}