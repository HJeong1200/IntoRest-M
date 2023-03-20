import IRouter from "../types/router";
import ShowcaseList from "../pages/showcase/ShowcaseList";
import Signup from "../pages/signup/signup";

const Router: IRouter[] = [
  {
    id: 1,
    name: "Showcase",
    path: "/showcase",
    element: ShowcaseList,
  },
  {
    id: 2,
    name: "Signup",
    path: "/signup",
    element: Signup,
  },
];

export default Router;
