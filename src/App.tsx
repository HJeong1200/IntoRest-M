import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Router from "./constants/router";
import ShowcaseList from "./pages/showcase/ShowcaseList";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/showcase"} element={<ShowcaseList />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
