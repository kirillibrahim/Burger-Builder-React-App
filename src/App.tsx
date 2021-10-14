import React from "react";
import "./styles.css";
import DefaultLayout from "./containers/DefaultLayout";
import useToken from "./constants/CustomHooks/useToken";
import Login from "./views/Login";
import Burger from "./views/Burger";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <DefaultLayout>
      <Burger />
    </DefaultLayout>
  );
}
