import React, { useState, useEffect } from 'react';
import TeamMembers from './components/TeamMembers'
import Form from './components/Form';
import axios from './axios';
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      return;
    }

    axios.post('fakeapi.com', newMember)
      .then(res => {
        const memberFromDb = res.data;
        setMembers([memberFromDb, ...members]);
        setFormValues(initialFormValues);
      })

  }

  useEffect(() => {
    axios
      .get('fakeapi.com')
      .then(res => { setMembers(res.data) })
  }, [])

  return (
    <div className="container">
      <h1>Form App</h1>
      <header className="App-header">
        <Form
          update={updateForm}
          submit={submitForm}
          values={formValues}
        />
        {
          members.map(member => {
            return (
              <TeamMembers key={member.id} details={member} />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
