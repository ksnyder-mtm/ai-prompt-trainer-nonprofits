import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import ScenarioSelection from './components/ScenarioSelection';
import ProgressionView from './components/ProgressionView';
import CompletionSummary from './components/CompletionSummary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/scenarios" element={<ScenarioSelection />} />
          <Route path="/progression/:scenarioId" element={<ProgressionView />} />
          <Route path="/completion" element={<CompletionSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
