import { useParams } from 'react-router-dom';
import { useAuth } from './security/AuthContext.jsx';
import { retrieveTodoApi } from './api/TodoApiService.js';
import { useEffect, useState } from 'react';

function TodoComponent() {
  const {id} = useParams()
  const authContext = useAuth()
  const username = authContext.username
  const [description, setDescription] = useState('');

  useEffect(() => {
    retrieveTodos();
  }, [id]);

  function retrieveTodos() {
    retrieveTodoApi(username, id)
      .then(response => {
        setDescription(response.data.description);
      })
      .catch(error => console.log(error));

  }

  return (
    <div className="container">
      <h1>Enter To-do Details</h1>
      <div>
        Description: {description}
      </div>
    </div>
  );
}

export default TodoComponent;