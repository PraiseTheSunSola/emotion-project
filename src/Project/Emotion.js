import { Homepage } from "./Homepage";
import { Navbar } from "./Navbar";
import { Regulation } from "./Regulation";
import { Introduction } from "./Introduction";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Control } from "./Control";

export function Emotion() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="" element={<Navbar />}>
            <Route path="/Regulation" element={<Regulation />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Control" element={<Control />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
