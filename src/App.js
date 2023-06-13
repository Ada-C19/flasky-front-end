import CatList from './components/CatList';

import './App.css';

const DATA = [
  {
    name: "Ubik",
    caretaker: "Maria",
    color: "grey",
    personality: "wild child",
  },
  {
    name: "Pepper",
    caretaker: "Mark",
    color: "black",
    personality: "spicy",
  },
  {
    name: "Binx",
    caretaker: "Susan",
    color: "tuxedo",
    personality: "feral",
  },
];


function App() {
  return (
    <main className="App">
      <h1>The Cat Corner</h1>
      <CatList catData={DATA} />
    </main>
  );
}

export default App;