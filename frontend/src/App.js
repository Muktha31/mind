// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CheckIn from './components/CheckIn';
import GratitudeJar from './components/GratitudeJar';
import ScenarioVisualization from './components/RelaxationScenarios';
import MindfulnessJourney from './components/MindfullnessJourney';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/gratitude" element={<GratitudeJar />} />
          <Route path="/scenario" element={<ScenarioVisualization />} />
          <Route path="/journey" element={<MindfulnessJourney />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


