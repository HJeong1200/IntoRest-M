import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import Showcase from "../../components/showcase/Showcase";
import { IShowcase } from "../../types/showcase";

const ShowcaseList = () => {
  const [showcaseList, setShowcaseList] = useState<IShowcase[]>([]);

  const defaultShowcase: Partial<IShowcase> = {
    author: {
      username: "user",
      profileImg: "string",
    },
    likes: 10,
  };

  useEffect(() => {
    const getShowcaseList = async () => {
      const querySnapshot = await getDocs(collection(db, "showcase"));

      const data = querySnapshot.docs.map((doc) => {
        return { ...defaultShowcase, id: doc.id, ...doc.data() };
      });

      setShowcaseList(data as IShowcase[]);
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
