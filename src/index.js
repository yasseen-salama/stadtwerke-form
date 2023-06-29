import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Onboarding from './componenets/Onboarding';
import './App.css'

const App = () => {
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
      <Onboarding />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);