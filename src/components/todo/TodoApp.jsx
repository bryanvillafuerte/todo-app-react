import './TodoApp.css'

export function TodoApp() {
  return (
    <div className="TodoApp">
      Todo Management Application
      <LoginComponent />
      {/*<WelcomeComponent />*/}
    </div>
  );
}

function LoginComponent() {
  return (
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label>Username:</label>
          <input type="text" name="username" value="" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <button type="button" name="login">Login</button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div>Welcome to Todo Management Application</div>;
}