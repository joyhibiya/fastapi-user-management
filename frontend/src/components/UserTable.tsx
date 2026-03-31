import { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../api/users";

export const UserTable = () => {
  const [users, setUsers] = useState<any[]>([]);

  const load = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>
              <button onClick={() => deleteUser(u.id).then(load)}>
                削除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
