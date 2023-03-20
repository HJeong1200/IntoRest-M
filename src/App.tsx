import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Router from "./constants/router";
import Login from "./pages/login/login";
import ShowcaseCreate from "./pages/showcase/ShowcaseCreate";
import ShowcaseList from "./pages/showcase/ShowcaseList";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/showcase"} element={<ShowcaseList />} />
        <Route path="/showcase/new" element={<ShowcaseCreate />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
