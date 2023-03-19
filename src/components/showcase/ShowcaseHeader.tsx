import { Avatar } from "@mui/material";
import styled from "styled-components";

interface PropType {
  author: {
    username: string;
    profileImg: string;
  };
}

const ShowcaseHeader = ({ author }: PropType) => {
  return (
    <Wrapper>
      <Avatar alt="profile image" src={author.profileImg} />
      <NameContainer>{author.username}</NameContainer>
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
