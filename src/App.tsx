import { useState } from "react";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <header>
        <p>
          <button onClick={() => setIsHidden((prev) => !prev)}>
            {isHidden ? "Exibir" : "Esconder"}
          </button>
        </p>
        {!isHidden && <p>Agora vc me vê</p>}
      </header>
    </div>
  );
}

export default App;
