import React from 'react';
import Login from './page/login-reg/Login'
import Register from './page/login-reg/Register';
import Nav from './components/Nav';
import './assets/css/style.css'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './page/Home';
import User from './page/User';
function App() {
  return (
    <div className="App">
        <Router>
      <Nav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
