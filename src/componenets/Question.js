import React from 'react';

const Question = ({ questionText, btn1Text, btn2Text, handleSelection }) => {
  return (
    
    <div className="row mt-5">
      <div className="col-question">
        <div className="question-container">
          <p className="display-3">{questionText}</p>
        </div>
        <div className="button-container">
          <button 
            className="btn btn-primary btn-lg m-2" 
            onClick={handleSelection} 
            value="true"
          >
            {btn1Text}
          </button>
          <button 
            className="btn btn-secondary btn-lg m-2" 
            onClick={handleSelection} 
            value="false"
          >
            {btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Question;