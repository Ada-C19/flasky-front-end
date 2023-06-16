import React from 'react';
import './App.css';
import CrystalList from './components/CrystalList';

const crystalData = [
  {
    id: 1,
    name: 'Amethyst',
    color: 'Purple',
    powers: 'Infinite knowledge and wisdom',
    charges: 0
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: 'Orange',
    powers: 'Confidence and strength',
    charges: 0
  },
  {
    id: 3,
    name: 'Rose Quarts',
    color: 'Pink',
    powers: 'Love',
    charges: 0
  },
];

function App() {
  const [crystals, setCrystals] = React.useState(crystalData)

  const increaseCharge = (id) => {
    setCrystals(prevCrystals => {
      const updatedCrystals = prevCrystals.map(crystal => {
        // condition ? <value to return if true> : <value to return if false>
        return crystal.id === id ? {...crystal, charges: crystal.charges + 1} : crystal
      })
      return updatedCrystals
    })
    
  }

  const removeCrystal = (id) => {
    setCrystals(prevCrystals => {
      const updatedCrystals = prevCrystals.filter(crystal => crystal.id !== id)
      return updatedCrystals
    })
  }

  const totalCharges = () => {
    let total = 0;
    for (let crystal of crystals) {
        total += crystal.charges
    }

    return total
  }

  const title = 'The Crystal Cove';
  return (
    <main className='App'>
      <h1>{title}</h1>
      <p>Total Charges: {totalCharges()}</p>
      <CrystalList crystals={crystals} removeCrystal={removeCrystal} increaseCharge={increaseCharge}/>
    </main>
  );
}

export default App;
