import "./App.css";
import Navbar from "./components/NavBar";
import { CssBaseline } from "@mui/material";
import { APIProvider } from "./context/api.context";
import { DarkModeProvider } from "./context/theme.context";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <APIProvider>
      <DarkModeProvider>
        <CssBaseline />
        <Navbar />
        <Outlet />
      </DarkModeProvider>
    </APIProvider>
  );
}

export default App;
