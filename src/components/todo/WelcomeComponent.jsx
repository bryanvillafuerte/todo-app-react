import { Link, useParams } from 'react-router-dom';

function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="Welcome container">
      <h1>Welcome to your To-do App, {username}!</h1>
      <div>
        Manage you todos: <Link to="/todos">Click here</Link>
      </div>
    </div>
  );
}

export default WelcomeComponent;