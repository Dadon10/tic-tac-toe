import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Global styles
import App from './App'; // Main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Mount App to the 'root' div in public/index.html
);
