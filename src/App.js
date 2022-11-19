import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Authorization/Login';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <h1>Hello World</h1>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Authorization</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
