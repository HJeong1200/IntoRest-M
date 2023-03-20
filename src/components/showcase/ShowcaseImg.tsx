import styled from "styled-components";

interface PropType {
  image: string;
}

const ShowcaseImg = ({ image }: PropType) => {
  return (
    <Wrapper>
      <img
        alt="content image"
        src={image}
        style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-height: 500px;
  background-color: gray;
`;

export default ShowcaseImg;
