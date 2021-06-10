import React  from 'react';


const End = ({ results, data, onReset, onAnswersCheck, time }) => {



  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <button className="button is-success mr-2" onClick={onAnswersCheck}>Check your Submission</button>
          <button className="button is-info" onClick={onReset}>Submit again</button>
        </div>
      </div>
    </div>
  );
}

export default End;