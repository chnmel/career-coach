import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/navigation/Header/Header';
import Footer from './components/navigation/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProfessionalFields from './screens/ProfessionalFields';
import EducationType from './screens/EducationType';
import AdmissionExam from './screens/AdmissionExam';
import Application from './screens/Application';
import Interview from './screens/Interview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='Berufsfeld' element={<ProfessionalFields />} />
          <Route path='LehreOderSchule' element={<EducationType />} />
          <Route path='Aufnahmetest' element={<AdmissionExam />} />
          <Route path='Bewerbung' element={<Application />} />
          <Route path='Bewerbungsgespräch' element={<Interview />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;