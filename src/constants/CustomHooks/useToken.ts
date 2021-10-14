import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function useToken() {
  const getToken = () => {
    let tokenString = sessionStorage.getItem("userToken");
    let userToken = JSON.parse(tokenString);
    if (userToken) {
      let decodedToken = jwt_decode(userToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        console.log("expired");
        sessionStorage.clear();
        return null;
      }
    }

    console.log({ userToken });
    console.log(sessionStorage.getItem("userToken"));
    return userToken;
  };

  const [token, setToken] = useState(getToken());
  //JSON.stringify()
  const saveToken = (userToken) => {
    sessionStorage.setItem("userToken", JSON.stringify(`Bearer ${userToken}`));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  };
}
