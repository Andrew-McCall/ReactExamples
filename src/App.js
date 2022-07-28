import React, { Fragment, useState,Nav } from "react";
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
import Mapper from "./components/mapper";
import Fact from "./components/fact";

function App() {

  return (
    <Router>

      <nav>
        <Link to="/"> Home </Link>
        <Link to="/users"> Users </Link>
        <Link to="/contact"> Contact </Link>
      </nav>

      <Routes>

        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/users">
          <Route path="" element={"geger"}></Route>
          <Route path=":id" element={<Fact fact="page twooo"/>}></Route>
          <Route path=":id/:name" element={<Fact fact="two useParams"/>}></Route>
        </Route>

        <Route path="*" element={<h1>Error: 404</h1>}></Route>


      </Routes>

    </Router>
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