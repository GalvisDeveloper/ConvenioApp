import React from 'react';
import Main from './components/UserView/components/Agreement/components/Main';
import Header from './components/UserView/components/Header';
import Presentation from './components/UserView/components/Presentation';
// import Agreement from './components/UserView/components/Agreement';

function App() {
  return (
    <div className="App">
      <Header title="Convenios UFPS" />
      <Presentation msg="Breve Descripción del programa" />
      <Main />
      {/* <AgreementTable /> */}
    </div>
  );
}

export default App;
