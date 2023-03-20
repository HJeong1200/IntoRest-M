import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const handleLogOut = () => {
  signOut(auth)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default handleLogOut;
