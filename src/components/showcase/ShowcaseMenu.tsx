import { IconButton, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import styled from "styled-components";

interface PropType {
  likes: number;
}

const ShowcaseMenu = ({ likes }: PropType) => {
  return (
    <Wrapper>
      <Stack direction="row">
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </Stack>
      <div>
        {likes} {likes < 2 ? "Like" : "Likes"}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 12px;
`;

export default ShowcaseMenu;
