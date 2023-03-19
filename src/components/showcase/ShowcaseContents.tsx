import styled from "styled-components";

const ShowcaseContents = () => {
  return (
    <Wrapper>
      <ContentsContainer>
        ContentsContentsContentsContentsContentsContentsContentsContents
      </ContentsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 10px 0 20px 0;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  word-wrap: break-word;
`;

export default ShowcaseContents;
