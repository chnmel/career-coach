import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/navigation/Header/Header';
import Footer from './components/navigation/Footer/Footer';
import ProfessionalFields from './screens/ProfessionalFields/ProfessionalFields';

function App() {
  return (
    <div className="App">
      <Header />
      <ProfessionalFields />

      <Footer />
    </div>
  );
}

export default App;
