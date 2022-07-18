import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from 'react-redux'
import stor from './stor'

import './index.css';
import App from './App';

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// bootstrap
import { Container } from "react-bootstrap";
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Provider store={stor}>
          <App />
        </Provider>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

