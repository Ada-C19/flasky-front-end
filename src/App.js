import logo from './logo.svg';
import './App.css';
import CatList from "./components/CatList";

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <CatList />
      </main>
    </div>
  );
}

export default App;
