import React from 'react';

function ShowError({ message }) {
  return (
    <div className="error">
      {message === 'missingName' && <p>Por favor digite um nome valido</p>}
      {message === 'missingAbsence' && <p>Por favor digite um valor para falta entre 1 a 30</p>}
      {message === 'missingNameAbsence' && <p>Por favor digite um nome valido e um valor para falta entre 1 a 30</p>}
      {message === 'wrongAbsence' && <p>Por favor digite um valor para falta entre 1 a 30, ultrapassa 30 ou inferior a 1</p>}
    </div>
  );
}

export default ShowError;
