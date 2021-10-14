import React, { useState } from "react";
import { loginUser } from "../../constants/APIs/LoginApi";
import styled from "styled-components";
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputDiv = styled.div`
  margin: 1rem auto;
  input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
  }
  button {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: #c0764f;
    border: 1px solid #c0764f;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }
`;

const LabelInput = styled.label`
  display: block;
  margin-bottom: 0.7rem;
`;

interface Props {
  setToken: () => any;
}

const Login = (props: Props) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setToken } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //console.log({ name, password });
    const result = await loginUser({
      name,
      password
    });
    console.log(result?.data?.token);
    if (result?.data?.token) {
      setError(false);
      setToken(result.data.token);
      window.location.reload(false);
    } else {
      console.log(result);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <LoginWrapper>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        {error && (
          <InputDiv>
            <p style={{ color: "red" }}>Invalid or Missing Credintials</p>
          </InputDiv>
        )}

        <InputDiv>
          <LabelInput>Username</LabelInput>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <LabelInput>Password</LabelInput>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputDiv>
        <InputDiv>
          <button type="submit" disabled={loading}>
            Submit{" "}
          </button>
        </InputDiv>
      </form>
    </LoginWrapper>
  );
};

export default Login;
