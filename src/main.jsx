import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css'; // Your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. WRAP your entire App component (or at least the part that contains the Nav) */}
    <Router> 
      <App />
    </Router>
  </React.StrictMode>,
);