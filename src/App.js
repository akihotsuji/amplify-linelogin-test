import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from "./aws-exports";
import LoginPage from './LoginPage';
import LoginSuccessPage from './LoginSuccessPage';

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login-success" element={<LoginSuccessPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;