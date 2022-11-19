import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(AuthContext);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log({
          username,
          password,
        });
        const res = await fetch("http://localhost:8000/auth/login", {
          body: JSON.stringify({
            username,
            password,
          }),
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setToken(data.refreshToken);
      }}
    >
      <p>username</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
