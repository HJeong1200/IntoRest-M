import axios from "axios";
import { useEffect, useState } from "react";
import Showcase from "../../components/showcase/Showcase";
import BASE_URL from "../../constants/server";
import { IShowcase } from "../../types/showcase";

const ShowcaseList = () => {
  const [showcaseList, setShowcaseList] = useState<IShowcase[]>([]);

  useEffect(() => {
    const getShowcaseList = async () => {
      const { data } = await axios.get(`${BASE_URL}/showcase`);
      setShowcaseList(data);
    };

    getShowcaseList();
  }, []);

  return (
    <>
      {showcaseList.map((showcase: IShowcase) => (
        <Showcase key={showcase.id} showcase={showcase} />
      ))}
    </>
  );
};

export default ShowcaseList;
