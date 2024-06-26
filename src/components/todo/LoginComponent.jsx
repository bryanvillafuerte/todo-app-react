import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext.jsx';

function LoginComponent() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
      navigate('/login')
    }
  }

  return (
    <div className="Login container">
      <h1>Please login</h1>
      {showErrorMessage && <div className="errorMessage text-danger mb-3">Authentication failed. Please check your credentials.</div>}
      <div className="LoginForm">
        <div className="mb-3">
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="mb-3">
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