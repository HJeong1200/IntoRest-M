import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import styled from "styled-components";

const ShowcaseCreate = () => {
  const [image, setImage] = useState<string>("https://picsum.photos/390");
  const [content, setContent] = useState<string>("");

  const handleUpload = async () => {
    if (!content || !image) return;

    const newShowcase = {
      content,
      image,
      likes: 0,
    };

    await addDoc(collection(db, "showcase"), newShowcase);
  };

  return (
    <Wrapper>
      <h2>New Showcase</h2>
      <Box component="form" sx={sx}>
        <TextField
          variant="standard"
          label="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          variant="standard"
          multiline
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label="Content"
        />
      </Box>
      <Button onClick={handleUpload}>Upload</Button>
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

export default ShowcaseCreate;
