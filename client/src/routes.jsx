import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export default function createRoutes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ path: "/", element: <h1>test</h1> }],
    },
    // { path: "/matches", element: <Matches /> },
    // { path: "/profile", element: <Profile /> },
  ]);
}
