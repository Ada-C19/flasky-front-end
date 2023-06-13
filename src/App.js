import React from 'react';
import './App.css';
import CrystalList from './components/CrystalList';

const crystalData = [
  {
    id: 1,
    name: "Amethyst",
    color: "Pruple",
    powers: "Infinite knowledge and wisdom"
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "Orange",
    powers: "Confidence and strength"
  },
  {
  id: 3,
  name: "Rose Quarts",
  color: "Pink",
  powers: "Love"
  },
];
function App() {
  const title = 'The Crystal Cove'
  return (
    <main className="App">
      <h1>{title}</h1>
      {/* 'crystals' is the key 'crystalData' is the value */}
      <CrystalList crystals={crystalData}/>
    </main>
  );
}

export default App;
