import { IShowcase } from "../../types/showcase";
import ShowcaseContents from "./ShowcaseContents";
import ShowcaseHeader from "./ShowcaseHeader";
import ShowcaseImg from "./ShowcaseImg";
import ShowcaseMenu from "./ShowcaseMenu";

interface PropType {
  showcase: IShowcase;
}

const Showcase = ({ showcase }: PropType) => {
  const { author, image, likes, content } = showcase;

  return (
    <>
      <ShowcaseHeader author={author} />
      <ShowcaseImg image={image} />
      <ShowcaseMenu likes={likes} />
      <ShowcaseContents content={content} />
    </>
  );
};

export default Showcase;
