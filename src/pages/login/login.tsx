import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <Wrapper>
      <h2>Log In</h2>
      <Box component="form" sx={sx}>
        <TextField
          required
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <TextField
          required
          variant="standard"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
      </Box>
      <Button onClick={handleLogin}>Log In</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const sx = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  marginBottom: "25px",
};

export default Login;
