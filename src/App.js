
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ViewContactDetails from './Components/Pages/ViewContactDetails';
import AddContact from './Components/Pages/AddContact';
import Nav from './Components/Nav';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
     <Home/>
      <Routes>
       <Route exact path="/addContact" element={<AddContact/>}/>
        <Route exact path="/viewContact" element={<ViewContactDetails/>}/>
       
      </Routes>
    </Router>
  </div>
  );
}

export default App;
