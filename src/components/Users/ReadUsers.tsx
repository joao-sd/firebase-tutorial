import React, { useCallback, useEffect, useState } from "react";
import { useDeleteData } from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { IUser } from "../../types/user.types";
import { CreateUsers } from "./CreateUsers";

export const ReadUsers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = useGetData<IUser>("users");
  const updateUsers = useUpdateData("users");
  const deleteUsers = useDeleteData("users");

  const fetchUsers = useCallback(async () => {
    const users = await getUsers();
    if (users) {
      setUsers(users);
    }
  }, [getUsers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const onUpdateUser = async (id: string) => {
    const updatedUser = {
      name: "Updated User",
      age: 20,
    };
    await updateUsers(id, updatedUser);
    await fetchUsers();
  };

  const onDeleteUser = async (id: string) => {
    await deleteUsers(id);
    await fetchUsers();
  };

  const onRenderUsers = () =>
    users?.map((user, index) => (
      <ul key={`${user.name}_${index}`}>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>
          <button onClick={() => onUpdateUser(user.id)}>Update User</button>
          <button onClick={() => onDeleteUser(user.id)}>Delete User</button>
        </li>
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
