import React, { useState } from "react";
import Question from "./Question";
import SignupForm from "./SignupForm";

//TODO: Move questions from index.js to Onboarding component  

const Onboarding = () => {    
  const [questionStack, setQuestionStack] = useState([]);
  const [isOwner, setIsOwner] = useState(null);
  const [selfRegister, setSelfRegister] = useState(null);
  const [isBasic, setIsBasic] = useState(null);
  const [privateCustomer, setPrivateCustomer] = useState(null);
  const [businessCustomer, setBusinessCustomer] = useState(null);
  const [moveOut, setMoveOut] = useState(null);
  const [moveIn, setMoveIn] = useState(null);

  const handleCustomerTypeSelection = (e) => {
    setPrivateCustomer(e.target.value === 'true');
    setBusinessCustomer(e.target.value === 'false');
    setQuestionStack(prev => [...prev, 'customerType']);
  };

  const handleMoveTypeSelection = (e) => {
    setMoveOut(e.target.value === 'true');
    setMoveIn(e.target.value === 'false');
    setQuestionStack(prev => [...prev, 'moveType']);
  };

  const handleOwnerSelection = (e) => {
    setIsOwner(e.target.value === 'true');
    if (e.target.value === 'false') { 
      setSelfRegister(true);
    }
    setQuestionStack(prev => [...prev, 'owner']);
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
    setQuestionStack(prev => [...prev, 'register']);
  };

  const handleBasicSelection = (e) => {
    if (e.target.value === "false") {
      window.location.href = "https://portal.stadtwerke-pforzheim.de/powercommerce/swph/fo/portal/productSearch?execution=e176143354s1";
    } else {
      setIsBasic(e.target.value === 'true');
    }
    setQuestionStack(prev => [...prev, 'basic']);
  };

  const handleBack = () => {
    const lastQuestion = questionStack[questionStack.length - 1];
    switch (lastQuestion) {
      case 'customerType':
        setPrivateCustomer(null);
        setBusinessCustomer(null);
        break;
      case 'moveType':
        setMoveOut(null);
        setMoveIn(null);
        break;
      case 'owner':
        setIsOwner(null);
        break;
      case 'register':
        setSelfRegister(null);
        break;
      case 'basic':
        setIsBasic(null);
        break;
      default:
        break;
    }
    setQuestionStack(prev => prev.slice(0, -1));
  };
  return (
    <div>
      {questionStack.length > 0 && (
        <button onClick={handleBack}>Back</button>
      )}

      {privateCustomer === null ? (
        <div className="fade-move-up">
          <Question
            questionText="Sind Sie Privatkunde oder Geschäftskunde?"
            btn1Text="Privatkunde"
            btn2Text="Geschäftskunde"
            handleSelection={handleCustomerTypeSelection}
          />
        </div>
     ) : moveOut === null ? (
        <div className="fade-move-up">
        <Question
          questionText="Handelt es sich um ein Auzug oder ein Einzug?"
          btn1Text="Auzug"
          btn2Text="Einzug"
          handleSelection={handleMoveTypeSelection}
        />
        </div>
      ) : isOwner === null ? (
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
            <div className="fade-move-up">
            <Question
              questionText="Möchten Sie Sich in die Grundversorgung anmelden oder einen Laufzeitvertrag abschließen?"
              btn1Text="Grundversorgung"
              btn2Text="Laufzeitvertrag"
              handleSelection={handleBasicSelection}
            />
            </div>
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

export default Onboarding;