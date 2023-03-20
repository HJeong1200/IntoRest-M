import styled from "styled-components";

interface PropType {
  image: string;
}

const ShowcaseImg = ({ image }: PropType) => {
  return (
    <Wrapper>
      <img alt="content image" src={image} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 390px;
  background-color: gray;
`;

export default ShowcaseImg;
