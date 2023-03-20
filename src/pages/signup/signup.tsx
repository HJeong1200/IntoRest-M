import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Box component="form" sx={sx}>
        <TextField
          required
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="User Name"
        />
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
        <TextField
          required
          variant="standard"
          type="password"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          label="Password Check"
        />
      </Box>
      <Button>Sign Up</Button>
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
  "flex-direction": "column",
  width: "80%",
  "margin-bottom": "25px",
};

export default Signup;
