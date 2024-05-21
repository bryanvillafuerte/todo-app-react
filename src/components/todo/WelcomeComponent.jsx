import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { retrieveHelloWorldPathVariable } from './api/HelloWordApiService.js';

function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  function callHelloWorldRestApi() {
    retrieveHelloWorldPathVariable(username)
      .then( (response) => succesfulResponse(response) )
      .catch( (error) => errorResponse(error) )
      .finally( () => console.log('cleanup') );
  }

  function succesfulResponse(response) {
    console.log(response);
    setMessage(response.data.message)
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="Welcome container">
      <h1>Welcome to your To-do App, {username}!</h1>
      <div>
        Manage you todos: <Link to="/todos">Click here</Link>
      </div>
      <div>
        <button className="btn btn-success mt-5" onClick={callHelloWorldRestApi}>Call Hello World</button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

export default WelcomeComponent;