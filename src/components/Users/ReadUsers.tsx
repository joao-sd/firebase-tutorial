import React, { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { IUser } from "../../types/user.types";
import { CreateUsers } from "./CreateUsers";

export const ReadUsers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = useGetData<IUser>("users");

  const fetchUsers = async () => {
    const users = await getUsers();
    if (users) {
      setUsers(users);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRenderUsers = () =>
    users?.map((user, index) => (
      <ul key={`${user.name}_${index}`}>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.age}</li>
      </ul>
    ));

  return (
    <>
      <CreateUsers
        onCreate={async () => {
          await fetchUsers();
        }}
      />

      <h1>Read Users</h1>
      {onRenderUsers()}
    </>
  );
};
