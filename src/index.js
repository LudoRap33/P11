import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
);


