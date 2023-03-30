import React from 'react';

function ListAbsences({ absences }) {
  return (
    <div className='absences-container'>
      <h2>Lista de Faltas</h2>
      {absences.length === 0 ? (
        <p>Não ha ninguem.</p>
      ) : (
        <ul>
          {absences.map((absence, index) => (
            <div className='absence-item' key={index}>{absence.name} : {absence.numAbsences} Faltas</div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListAbsences;
