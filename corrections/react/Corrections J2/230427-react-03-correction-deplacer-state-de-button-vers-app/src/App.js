import { useState } from "react";

export default function MyApp() {
  const [countDeApp, setCountDeApp] = useState(0);

  function handleClickDeApp() {
    setCountDeApp(countDeApp + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton
        countDeButton={countDeApp}
        handleClickDeButton={handleClickDeApp}
      />

      <MyButton
        countDeButton={countDeApp}
        handleClickDeButton={handleClickDeApp}
      />
    </div>
  );
}

function MyButton({ countDeButton, handleClickDeButton }) {
  return (
    <button onClick={handleClickDeButton}>Clicked {countDeButton} times</button>
  );
}
