import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="Login container">
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
          <button className="btn btn-primary" type="button" name="login" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;