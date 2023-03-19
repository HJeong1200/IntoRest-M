import { Avatar } from "@mui/material";
import styled from "styled-components";

const ShowcaseHeader = () => {
  return (
    <Wrapper>
      <Avatar>H</Avatar>
      <NameContainer>UserName</NameContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: aliceblue;
`;

const NameContainer = styled.div`
  margin-left: 10px;
`;

export default ShowcaseHeader;
