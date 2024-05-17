import { Link } from 'react-router-dom';
import { AuthContext, useAuth } from './security/AuthContext.jsx';
import { useContext } from 'react';

function HeaderComponent() {

  const authContext = useAuth();

  console.log(authContext);

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand ms-2 fs-2 fw-bold text-black">To-do App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/welcome/bryanvillafuerte" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/todos" className="nav-link">Todos</Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;