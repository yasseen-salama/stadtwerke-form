import React, { useState } from "react";
import Question from "./Question";
import SignupForm from "./SignupForm";

const Onboarding = () => {    
  const [questionStack, setQuestionStack] = useState([]);
  const [isOwner, setIsOwner] = useState(null);
  const [isPropertyManager, setIsPropertyManager] = useState(null);
  const [selfRegister, setSelfRegister] = useState(null);
  const [isBasic, setIsBasic] = useState(null);
  const [privateCustomer, setPrivateCustomer] = useState(null);
  const [moveOut, setMoveOut] = useState(null);

  const handleSelection = (questionKey, setter) => (e) => {
    if (questionKey == 'basic' && e.target.value=== 'false') {
        window.location.href = "https://portal.stadtwerke-pforzheim.de/powercommerce/swph/fo/portal/productSearch?execution=e176143354s1";
    }
    if (questionKey === 'businessOwner') {
        if(e.target.innerText === 'Eigentümer') {
            setIsOwner('true');
        } else if (e.target.innerText === 'Hausverwaltung') {
            setIsPropertyManager('true');
        } else {
            setIsOwner('false');
        }
    } else  {
        setter(e.target.value === 'true');
    }
    setQuestionStack(prev => [...prev, questionKey]);
  };

  const handleBack = () => {
    const lastQuestion = questionStack[questionStack.length - 1];
    const resetState = {
      'customerType': () => setPrivateCustomer(null),
      'moveType': () => setMoveOut(null),
      'owner': () => setIsOwner(null),
      'businessOwner': () => setIsPropertyManager(null),
      'register': () => setSelfRegister(null),
      'basic': () => setIsBasic(null)
    };

    resetState[lastQuestion] && resetState[lastQuestion]();
    setQuestionStack(prev => prev.slice(0, -1));
  };

  const questions = [
    {
      key: 'customerType',
      text: "Sind Sie Privatkunde oder Geschäftskunde?",
      btn1Text: "Privatkunde",
      btn2Text: "Geschäftskunde",
      handler: handleSelection('customerType', setPrivateCustomer)
    },
    {
      key: 'moveType',
      text: "Handelt es sich um ein Auzug oder ein Einzug?",
      btn1Text: "Auzug",
      btn2Text: "Einzug",
      handler: handleSelection('moveType', setMoveOut)
    },
    {
      key: 'owner',
      text: "Sind Sie Eigentümer oder Mieter?",
      btn1Text: "Eigentümer",
      btn2Text: "Mieter",
      handler: handleSelection('owner', setIsOwner),
      condition: () => privateCustomer === true
    },
    {
      key: 'businessOwner',
      text: "Sind Sie Eigentümer, Mieter oder Hausverwaltung?",
      btn1Text: "Eigentümer",
      btn2Text: "Mieter",
      btn3Text: "Hausverwaltung",
      handler: handleSelection('businessOwner', null),
      condition: () => privateCustomer === false
    },
    {
      key: 'register',
      text: "Möchten Sie sich selbst anmelden oder möchten Sie eine andere Person anmelden?",
      btn1Text: "Selbst anmelden",
      btn2Text: "Andere Person anmelden",
      handler: handleSelection('register', setSelfRegister),
      condition: () => isOwner === 'true' || (privateCustomer === true && isOwner  === true)
    },
    {
      key: 'basic',
      text: "Möchten Sie Sich in die Grundversorgung anmelden oder einen Laufzeitvertrag abschließen?",
      btn1Text: "Grundversorgung",
      btn2Text: "Laufzeitvertrag",
      handler: handleSelection('basic', setIsBasic),
      condition: () => (isOwner === 'true' && selfRegister === 'true') || isPropertyManager === 'true' || (privateCustomer === true && isOwner  === false) ||  (privateCustomer === true && isOwner  === true && selfRegister == true) 
    },
  ];

  const currentQuestion = questions.find(
    question => 
    !questionStack.includes(question.key) && 
    (!question.condition || question.condition())
  );

  return (
    <div>
      {currentQuestion ? (
        <div className="fade-move-up">
          <Question
            questionText={currentQuestion.text}
            btn1Text={currentQuestion.btn1Text}
            btn2Text={currentQuestion.btn2Text}
            btn3Text={currentQuestion.btn3Text}
            handleSelection={currentQuestion.handler}
          />
        </div>
      ) : (
        <SignupForm />
      )}

      {questionStack.length > 0 && (
        <div role="button" onClick={handleBack} className="back-button">
          <img 
            src={process.env.PUBLIC_URL + '/Back_Arrow.svg'}
            alt='Go Back'
          />
          <span>Zurück</span>
        </div>
      )}
    </div>
  );
};

export default Onboarding;