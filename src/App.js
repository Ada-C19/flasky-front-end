import "./App.css";
import CatList from "./components/CatList";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    name: "Ubik",
    caretaker: "Maria",
    color: "grey",
    personality: "wild child",
    petCount: 0,
  },
  {
    id: 2,
    name: "Pepper",
    caretaker: "Mark",
    color: "black",
    personality: "spicy",
    petCount: 4,
  },
  {
    id: 3,
    name: "Binx",
    caretaker: "Susan",
    color: "tuxedo",
    personality: "feral",
    petCount: 2,
  },
];


const App = () => {

  const [catData, setCatData] = useState(DATA);

  const onPetCat = (id) => {
    setCatData(() => catData.map((cat) => {
      if (cat.id === id) {
        return { ...cat, petCount: cat.petCount + 1};
      } else {
        return cat;
      }
    }));
  };

  const calcTotalPets = (catData) => {
    let initial_val = 0;
    return catData.reduce((total, cat) => {
      return total + cat.petCount;
    }, initial_val);
  }

  const totalPetTally = calcTotalPets(catData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
        <h2>Total Number of Pets Across All Kitties: {totalPetTally}</h2>
      </header>
      <main>
        <CatList catData={catData} onPetCat={onPetCat}/>
      </main>
    </div>
  );
};

export default App;
