import React, { useCallback, useState } from "react";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  console.log(`count rendered `);

  // Com useCallback

  const incrementarOne = useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);

  const incrementarTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  // Padrao
  // const incrementarOne = () => {
  //   setCountOne(countOne + 1);
  // };

  // const incrementarTwo = () => {
  //   setCountTwo(countTwo + 1);
  // };

  return (
    <div className="App">
      <h1>UseCallback</h1>
      <hr />
      <h1>
        {countOne} - {countTwo}
      </h1>
      <Button name={"Incrementar L"} handleClick={incrementarOne} />

      <Button name="Incrementar R" handleClick={incrementarTwo} />
    </div>
  );
}

export default App;
