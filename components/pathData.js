import Home from "./home.js";
import About from "./about.js";
import Services from "./services.js";
import Contact from "./contact.js";

const PathInfo = [
  {
    id: 1,
    text: "Home",
    url: "/",
    component: Home
  },
  {
    id: 2,
    text: "About",
    url: "/about",
    component: About
  },
  {
    id: 3,
    text: "Services",
    url: "/services",
    component: Services
  },
  {
    id: 4,
    text: "Contact",
    url: "/contact",
    component: Contact
  }
];

export default PathInfo;
