import React, { useState } from 'react';
import './App.css';
import './styles.css';
import AddAbsence from './AddAbsence';
import ShowError from './ShowError';
import ListAbsences from './ListAbsences';

function App() {
  const [absences, setAbsences] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddAbsence = ({ name, numAbsences }) => {
    if (!name.trim() && !numAbsences) {
      setErrorMessage('missingNameAbsence');
      return;
    }

    if (!name.trim()) {
      setErrorMessage('missingName');
      return;
    }

    if (!numAbsences) {
      setErrorMessage('missingAbsence');
      return;
    }

    if (numAbsences > 30) {
      setErrorMessage('wrongAbsence');
      return;
    }

    const newAbsence = { name, numAbsences };
    setAbsences([...absences, newAbsence]);
    setErrorMessage('');
  }

  return (
    <div className="App">
      <h1>Registro de Faltas</h1>
      <div className="form-container">
        <AddAbsence onAdd={handleAddAbsence} />
        {errorMessage && <ShowError message={errorMessage} />}
      </div>
      <ListAbsences absences={absences} />
    </div>
  );
}

export default App;
