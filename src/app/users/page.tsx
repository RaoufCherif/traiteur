import React from "react";
import { getUsers } from "../../../util/getUsers";

export async function Users() {
  const users = await getUsers();
  const usersLength = users.length;

  console.log(usersLength + " je suis la longueur");

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {" "}
          {user.id}
          {user.nom}{" "}
        </li>
      ))}
    </ul>
  );
}

export default Users;
