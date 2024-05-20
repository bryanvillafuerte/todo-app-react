import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './security/AuthContext.jsx';
import { createTodoApi, retrieveTodoApi, updateTodoApi } from './api/TodoApiService.js';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import moment from 'moment';

function TodoComponent() {
  const {id} = useParams()
  const authContext = useAuth()
  const navigate = useNavigate()
  const username = authContext.username
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');

  useEffect(() => {
    retrieveTodos();
  }, [id]);

  function retrieveTodos() {
    if(id !== -1) {
      retrieveTodoApi(username, id)
        .then(response => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch(error => console.log(error));
    }
  }

  function onsubmit(values) {
    console.log(values)
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false
    }

    if(id === -1) {
      createTodoApi(username, todo)
        .then(() => navigate('/todos'))
        .catch(error => console.log(error));
      return;
    } else {
      updateTodoApi(username, id, todo)
        .then(() => navigate('/todos'))
        .catch(error => console.log(error));
    }
  }

  function validate(values) {
    let errors = {
      /*description: 'Enter a valid description',
      targetDate: 'Enter a valid target date'*/
    }

    if(values.description.length < 5) {
      errors.description = 'Enter at least 5 characters.'
    }

    if(!values.targetDate == null || values.targetDate === '' || !moment(values.targetDate).isValid()) {
      errors.targetDate = 'Enter a target date.'
    }

    return errors;
  }

  return (
    <div className="container">
      <h1>Enter To-do Details</h1>
      <div>
        <Formik
          initialValues={{description, targetDate}}
          enableReinitialize={true}
          onSubmit={onsubmit}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {
            (props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field className="form-control" type="text" name="description" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field className="form-control" type="date" name="targetDate" />
                </fieldset>
                <button className="btn btn-success mt-5" type="submit">Save</button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}

export default TodoComponent;