import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SignupForm from './componenets/SignupForm';
import Question from './componenets/Question';
import './App.css'

const App = () => {
  const [isOwner, setIsOwner] = useState(null);
  const [selfRegister, setSelfRegister] = useState(null);
  const [isBasic, setIsBasic] = useState(null);

  const handleOwnerSelection = (e) => {
    setIsOwner(e.target.value === 'true');
    if (e.target.value === 'false') { // If 'Mieter' is selected
      setSelfRegister(true);
    }
  };

  const handleRegisterSelection = (e) => {
    if(e.target.value === "false") {
      // Directly go to the form if "Andere Person anmelden" is selected
      setIsOwner(true);
      setSelfRegister(false);
      setIsBasic(true);
    } else {
      setSelfRegister(e.target.value === 'true');
    }
  };

  const handleBasicSelection = (e) => {
    if (e.target.value === "false") {
      window.location.href = "https://portal.stadtwerke-pforzheim.de/powercommerce/swph/fo/portal/productSearch?execution=e176143354s1";
    } else {
      setIsBasic(e.target.value === 'true');
    }
  };

  return (
    <div className="app-container">
      <div className="row">
        <div className="col-12">
          <img 
            src='https://www.stadtwerke-pforzheim.de/fileadmin/template/images/share/swp_logo.svg' 
            alt='logo' 
            className='img-fluid w-25' // Bootstrap class for responsive image
          />
        </div>
      </div>
      
      {isOwner === null ? (
        <div className="fade-move-up">
        <Question
          questionText="Sind Sie Eigentümer oder Mieter?"
          btn1Text="Eigentümer"
          btn2Text="Mieter"
          handleSelection={handleOwnerSelection}
        />
        </div>

      ) : isOwner ? (
        selfRegister === null ? (
          <div className="fade-move-up">
          <Question
            questionText="Möchten Sie sich selbst anmelden oder möchten Sie eine andere Person anmelden?"
            btn1Text="Selbst anmelden"
            btn2Text="Andere Person anmelden"
            handleSelection={handleRegisterSelection}
          />
          </div>
        ) : selfRegister ? (
          isBasic === null ? (
            <Question
              questionText="Möchten Sie Sich in die Grundversorgung anmelden oder einen Laufzeitvertrag abschließen?"
              btn1Text="Grundversorgung"
              btn2Text="Laufzeitvertrag"
              handleSelection={handleBasicSelection}
            />
          ) : (
            <SignupForm />
          )
        ) : (
          <SignupForm />
        )
      ) : (
        isBasic === null ? (
          <Question
            questionText="Möchten Sie Sich in die Grundversorgung anmelden oder einen Laufzeitvertrag abschließen?"
            btn1Text="Grundversorgung"
            btn2Text="Laufzeitvertrag"
            handleSelection={handleBasicSelection}
          />
        ) : (
          <SignupForm />
        )
      )}
    </div>

  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);