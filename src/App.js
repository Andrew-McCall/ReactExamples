import React from 'react';import image from "./pug.jpg";
import "./App.css"
import Example from './components/stateExample';
import DatabaseAccess from './components/databaseAccess';
import Shopping from './components/subfolder/ProductManager';

function App() {
  return (

    <React.StrictMode>

      {/* <Header/> */}
      <img src={image} className="puggly"></img><br/>
      {/* <Clock/> */}

      <Shopping/>
      <br/>

      <DatabaseAccess/>
      <Example/>

      {/* <Row age={20}/>
      <Row name="hehehe!"/>
      <Row name="ehr!"/> */}
        
    </React.StrictMode>

  );
}

export default App;
