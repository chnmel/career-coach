import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/navigation/Header/Header';
import Footer from './components/navigation/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Welcome from './screens/Welcome';
import Introspection from './screens/Introspection';
import ProfessionalFields from './screens/ProfessionalFields';
import EducationType from './screens/EducationType';
import TrialDay from './screens/TrialDay';
import Application from './screens/Application';
import AdmissionExam from './screens/AdmissionExam';
import Interview from './screens/Interview';
import FirstDay from './screens/FirstDay';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='Willkommen' element={<Welcome />} />
          <Route path='LerneDichKennen' element={<Introspection />} />
          <Route path='Berufsfeld' element={<ProfessionalFields />} />
          <Route path='LehreOderSchule' element={<EducationType />} />
          <Route path='Schnuppern' element={<TrialDay />} />
          <Route path='Bewerbung' element={<Application />} />
          <Route path='Aufnahmetest' element={<AdmissionExam />} />
          <Route path='Bewerbungsgespraech' element={<Interview />} />
          <Route path='DeinErsterTag' element={<FirstDay />} />
        </Routes>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
