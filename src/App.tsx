import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import Header from './components/navigation/Header/Header';
import Footer from './components/navigation/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProfessionalFields from './screens/ProfessionalFields/ProfessionalFields';
import AdmissionExam from './screens/AdmissionExam';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='Berufsfeld' element={<ProfessionalFields />} />
          <Route path='Aufnahmetest' element={<AdmissionExam />} />
        </Routes>
        <Footer />
      </BrowserRouter>        
    </div>
  );
}

export default App;
