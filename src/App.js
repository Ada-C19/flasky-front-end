import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCats } from "./redux/cat-slice";
import CatList from "./components/CatList";
import NewCatForm from "./components/NewCatForm";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const { cats } = useSelector((state) => state.cats);
  const { error } = useSelector((state) => state.cats);
  const catStatus = useSelector((state) => state.cats.status);

  useEffect(() => {
    if (catStatus === "idle") {
      dispatch(fetchCats());
    }
  }, [dispatch, catStatus]);

  const totalPetTally = cats.reduce((total, cat) => {
    total += cat.petCount;
    return total;
  }, 0);

  return (
    <main className="App">
      <h1>The Cat Corner</h1>
      {!error && (
        <>
          <h2>Total number of pets across all cats: {totalPetTally}</h2>
          <NewCatForm />
          <CatList catData={cats} />
        </>
      )}
      {error && (
        <h2>{error}</h2>
      )}
    </main>
  );
}

export default App;
