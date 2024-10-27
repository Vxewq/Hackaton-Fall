import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="div">
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}
