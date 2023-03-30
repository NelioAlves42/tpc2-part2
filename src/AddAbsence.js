import React, { useState } from 'react';

function AddAbsence({ onAdd }) {
    const [name, setName] = useState('');
    const [numAbsences, setNumAbsences] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    }
  
    const handleNumAbsencesChange = (event) => {
      setNumAbsences(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onAdd({ name, numAbsences });
      setName('');
      setNumAbsences('');
    }

    
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nome Completo:
          <input className='form-container input' type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Faltas:
          <input type="number" value={numAbsences} onChange={handleNumAbsencesChange} />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    );
  }

export default AddAbsence;