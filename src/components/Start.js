import React from 'react';

const Start = ({ onQuizStart }) => {
  return(

    <div className="start">
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start Choosing</h1>
          <p>Hope You Like it vDoit <span>😊</span></p>
          <p>Thank you for the opportunity <span>✔️</span></p>
         <div className="start">
         <button className="button is-primary is-medium" onClick={onQuizStart} style={{backgroundColor:"red"}}>Start</button>
         </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Start;