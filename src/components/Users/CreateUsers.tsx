import React, { FormEvent } from "react";
import styled from "styled-components";
import { useCreateData } from "../../hooks/useCreateData";
import { useForm } from "../../hooks/useForm";
import { INewUser } from "../../types/user.types";

interface IProps {
  onCreate: () => void;
}

export const CreateUsers: React.FC<IProps> = ({ onCreate }) => {
  const setUsers = useCreateData("users");

  const [newUser, setNewUser] = useForm<INewUser>({
    name: "",
    age: 18,
  });

  const onCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("creating user...");
    await setUsers(newUser);
    onCreate();
  };

  return (
    <Form onSubmit={onCreateUser}>
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

      <button type="submit">Create User</button>
    </Form>
  );
};

const Form = styled.form``;
