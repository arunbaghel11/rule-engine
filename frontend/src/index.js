import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './index.css'; // Import global CSS styles

// Render the App component into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Target the root div in public/index.html
);
