// import { Homepage } from "./Homepage";
import { Navbar } from "./Navbar";
import { Regulation } from "./Regulation";
import { Introduction } from "./Introduction";
import { Processing } from "./Processing";
import { Warehouse } from "./Warehouse";
import { Null1 } from "./Null1";
import { Null2 } from "./Null2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Emotion() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/Regulation" element={<Regulation />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Processing" element={<Processing />} />
            <Route path="/Warehouse" element={<Warehouse />} />
            <Route path="/Null1" element={<Null1 />} />
            <Route path="/Null2" element={<Null2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
