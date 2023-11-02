import { useState } from "react";
export const BASE_URL = "http://localhost:3000/api";
export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      // Need correct API ENDPOINT -----------▼▼▼
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
      // You can log ▲▲▲ the result
      // here ▼▼▼ to view the json object before returning it
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setUsername(username.toLowerCase());
    console.log(username);
    // validation
    if (username.length < 6 || password.length < 6) {
      alert("Username & Password must be greater than 5 characters");
      return;
    }

    const result = await registerUser();
    if (result.success) {
      setToken(result.data.token);
      alert("Successful Registration!🥂" + `${result.data.message}`);
    } else {
      alert(`Bummer!😱 ${result.error.message}`);
    }
  }
  return (
    <>
      <div>Login Here</div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="">
          Username
          <input
            type="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">LOGIN</button>
      </form>
    </>
  );
}
