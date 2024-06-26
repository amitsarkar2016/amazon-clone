import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './providers/reducer';
import { StateProvider } from './providers/StateProvider';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>

        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
