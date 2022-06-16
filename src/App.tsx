import { useEffect } from "react";
import { useData } from "./hooks/useData";

function App() {
  const users = useData("users");

  useEffect(() => {
    console.log(process.env.REACT_APP_ENV);
    console.log(users);
  }, [users]);

  return <h1>Hi firebase</h1>;
}

export default App;
