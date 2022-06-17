import React from "react";
import { useData } from "../hooks/useData";
import { useForm } from "../hooks/useForm";
import { INewUser, IUser } from "../types/user.types";

export const UsersCRUD: React.FC = () => {
  const users = useData<IUser>("users");
  const [newUser, setNewUser] = useForm<INewUser>({
    name: "",
    age: 18,
  });

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
      <h1>Create Users</h1>

      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser("name", e.target.value)}
        placeholder="Name"
      />

      <input
        type="number"
        value={newUser.age}
        onChange={(e) => setNewUser("age", e.target.value)}
        placeholder="Age"
      />

      <button>Create User</button>
      <h1>Read Users</h1>
      {onRenderUsers()}
    </>
  );
};
