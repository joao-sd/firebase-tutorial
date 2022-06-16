import { useData } from "./hooks/useData";
import { IUser } from "./types/user.types";

function App() {
  const users = useData<IUser>("users");

  const onRenderUsers = () =>
    users?.map((user) => (
      <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.age}</li>
      </ul>
    ));

  return (
    <>
      <h1>Users</h1>
      {onRenderUsers()}
    </>
  );
}

export default App;
