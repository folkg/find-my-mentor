import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Matches from "./pages/Matches";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function createRoutes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Matches /> },
        { path: "/matches", element: <Matches /> },
        { path: "/profile", element: <Profile /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "*", element: <h1>Page Not Found</h1> },
      ],
    },
    // { path: "/matches", element: <Matches /> },
    // { path: "/profile", element: <Profile /> },
  ]);
}
