import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SignupForm from './SignupForm'; // your Formik form
import './App.css'

const App = () => {
  const [isOwner, setIsOwner] = useState(null);
  const [selfRegister, setSelfRegister] = useState(null);
  const [isBasic, setIsBasic] = useState(null);

  const handleSelection = (e) => {
    setIsOwner(e.target.value === 'true');
  };

  const handleRegisterSelection = (e) => {
    setSelfRegister(e.target.value === 'true');
  };

  const handleBasicSelection = (e) => {
    setIsBasic(e.target.value === 'true');
  };

  return (
    <div className="container">
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
        <div className="row mt-5">
          <div className="col-12">
            <p className="display-3">Sind Sie Eigentümer oder Mieter?</p>
            <button 
              className="btn btn-primary btn-lg m-2" 
              onClick={handleSelection} 
              value="true"
            >
              Eigentümer
            </button>
            <button 
              className="btn btn-secondary btn-lg m-2" 
              onClick={handleSelection} 
              value="false"
            >
              Mieter
            </button>
          </div>
        </div>
      ) : isOwner ? (
        selfRegister === null ? (
          <div className="row mt-5">
            <div className="col-12">
              <p className="display-3">Möchten Sie sich selbst anmelden oder möchten Sie eine andere Person anmelden?</p>
              <button 
                className="btn btn-primary btn-lg m-2" 
                onClick={handleRegisterSelection} 
                value="true"
              >
                Selbst anmelden
              </button>
              <button 
                className="btn btn-secondary btn-lg m-2" 
                onClick={handleRegisterSelection} 
                value="false"
              >
                Andere Person anmelden
              </button>
            </div>
          </div>
        ) : selfRegister ? (
          isBasic === null ? (
            <div className="row mt-5">
              <div className="col-12">
                <p className="display-3">Möchten Sie Sich in die Grundversorgung anmelden oder einen Laufzeitvertrag abschließen?</p>
                <button 
                  className="btn btn-primary btn-lg m-2" 
                  onClick={handleBasicSelection} 
                  value="true"
                >
                  Grundversorgung
                </button>
                <button 
                  className="btn btn-secondary btn-lg m-2" 
                  onClick={handleBasicSelection} 
                  value="false"
                >
                  Laufzeitvertrag
                </button>
              </div>
            </div>
          ) : isBasic ? (
            <SignupForm />
          ) : (
            <p>Laufzeitvertrag logic will be added here later.</p>
          )
        ) : (
          <p>You've chosen to register another person. More logic will be added here later.</p>
        )
      ) : (
        <p>Only the owner can fill the form.</p>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);