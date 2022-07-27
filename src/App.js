import React, { Fragment } from "react";
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
import PageThree from "./components/apis/params";

function App() {
  return (
    <Router>

      <img src={image} className="puggly"></img><br/>
      <nav>
            <Link to="/"> Home </Link>
            <Link to="/page2"> Clock </Link>
            <Link to="/page3"> Users </Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/page2" element={<Clock/>}></Route>
        <Route path="/page3" element={<p>Error: You need an id. (e.g /page3/5)</p>}></Route>
        <Route path="/page3/:id" element={<PageThree/>}></Route>

      </Routes>

  </Router>
)};

export default App;
