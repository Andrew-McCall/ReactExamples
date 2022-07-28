import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import image from "./pug.jpg";
import "./App.css"
import Example from './components/stateExample';
import Footer from "./components/old/footer";
import Home from "./components/homePage";
import Clock from "./components/old/clock";
import Users from "./components/apis/params";
import Clicker from "./components/subfolder/userReducer";
import MyContext from "./context";
import Child from "./components/child";


function App() {

  // useReducer
  const [getVar, setVar] = useState(0)

  return (
    <>
    <button onClick={(e) => setVar(getVar+1)}>Click</button>
    <MyContext.Provider value={getVar}>
    
      <Child/> 
      {/* two that use the var form usereudcer */}

    </MyContext.Provider>
    
    </>
)};

export default App;

  //   <Router>
      
  //     <img src={image} className="puggly"></img><br/>
  //     <nav>
  //           <Link to="/"> Home </Link>
  //           <Link to="/users"> Users </Link>
  //           <Link to="/contact"> Contact </Link>
  //     </nav>

  //     <context.Provider>
  //       <Routes>

  //         <Route path="/" element={<Clicker/>}></Route>

  //         <Route path="/users" element={<Clock/>}></Route>
  //         <Route path="/users/:id" element={<Users/>}></Route>
          
  //         <Route path="/contact" element={<p>rjjrjrt</p>}></Route>
          
  //         <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>

  //       </Routes>
  //     </context.Provider>

  // </Router>