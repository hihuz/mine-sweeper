import React from 'react';

function displayHS(hs) {
  return (
    <li className='hs'>
      <div className='hs-name'>{hs.name}</div>
      <div className='hs-date'>{hs.date}</div>
      <div className='hs-time'>{hs.time}</div>
    </li>
  );
}

const HSDialog = ({ closeHSDialog, opened, highScores }) => (
  <div className={`hs-dialog dialog${opened?' opened':''}`}>
    <button className="dialog-close" onClick={closeHSDialog}>
      <i className='icon-close'></i>
    </button>
    <div className='hs-row'>
      <h2>Easy</h2>
      <ol>
      {highScores.easy.map(displayHS)}
      </ol>
    </div>
    <div className='hs-row'>
      <h2>Medium</h2>
      <ol>
      {highScores.medium.map(displayHS)}
      </ol>
    </div>
    <div className='hs-row'>
      <h2>Hard</h2>
      <ol>
      {highScores.hard.map(displayHS)}
      </ol>
    </div>
  </div>
);

export default HSDialog;