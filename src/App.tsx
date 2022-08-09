import { useEffect, useState } from "react";
import Button from "./components/Button";
import Typo from "./components/Typo";
import UserList from "./components/UserList";
import DateUtils from "./utils/DateUtils";

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [timer, setTimer] = useState<string>(DateUtils.printDateTimeNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(DateUtils.printDateTimeNow());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <h1>Título da página</h1>
      </header>
      <section>Tempo atual: {timer}</section>
      <section>
        <Button onClick={() => setIsHidden((prev) => !prev)}>
          {isHidden ? "EXIBIR" : "ESCONDER"}
        </Button>
        {!isHidden && <Typo>Agora vc me vê</Typo>}
      </section>
      <section>
        <UserList />
      </section>
    </>
  );
}

export default App;
