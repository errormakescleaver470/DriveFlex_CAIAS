import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import BrowseInstructors from "./pages/BrowseInstructors";
import InstructorDetail from "./pages/InstructorDetail";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "instructors", Component: BrowseInstructors },
      { path: "instructors/:id", Component: InstructorDetail },
      { path: "booking/:instructorId", Component: Booking },
      { path: "dashboard", Component: Dashboard },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "*", Component: NotFound },
    ],
  },
]);
