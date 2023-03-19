import { IconButton, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const ShowcaseMenu = () => {
  return (
    <Stack direction="row" sx={{ padding: "0 10px" }}>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton>
        <ChatBubbleOutlineIcon />
      </IconButton>
    </Stack>
  );
};

export default ShowcaseMenu;
