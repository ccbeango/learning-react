import Home from "../pages/home";
import About, { AboutMsg, CultureMsg, ContactMsg, JoinMsg } from "../pages/about";
import Product from '../pages/product'
import Profile from "../pages/profile";
import Login from "../pages/login";
import User from "../pages/user";
import Detail from "../pages/detail";
import NoMatch from "../pages/noMatch";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutMsg
      },
      {
        path: "/about/culture",
        component: CultureMsg
      },
      {
        path: "/about/contact",
        component: ContactMsg
      },
      {
        path: "/about/join",
        component: JoinMsg
      },
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/product",
    component: Product
  },
  {
    component: NoMatch
  }
];

export default routes;