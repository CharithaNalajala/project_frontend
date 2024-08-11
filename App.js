import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import PlaceDetail from './components/PlaceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/place/:slug" element={<PlaceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

