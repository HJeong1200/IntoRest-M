import { Button } from "@mui/material";
import handleLogOut from "../../api/handleLogOut";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>IntoRest</div>
      <div>Menu</div>

      <Button onClick={handleLogOut}>Log Out</Button>
    </header>
  );
};

export default Header;
