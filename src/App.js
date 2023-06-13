import logo from "./logo.svg";
import "./App.css";
import CatList from "./components/CatList";

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

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <CatList catData={DATA} />
      </main>
    </div>
  );
};

export default App;
