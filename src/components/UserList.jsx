import { useEffect, useState } from "react";
import User from "./User";
import { BASE_URL } from "./Login";

export default function UserList() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const results = await response.json();
      setUsers(results.users);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
    </>
  );
}
