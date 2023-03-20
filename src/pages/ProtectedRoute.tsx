import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import useRouter from "../hooks/useRouter";

interface PropType {
  children: React.ReactNode;
}

const ProtecTedRoute = ({ children }: PropType) => {
  const { routeTo } = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      routeTo("/login");
      return <></>;
    }
  });

  return <>{children}</>;
};

export default ProtecTedRoute;
