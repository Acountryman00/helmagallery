import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shows from "./Pages/Shows/Shows";
import Show from "./Pages/Show";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/show" element={<Show />}>
            <Route path=":showId" element={<Show />} />
          </Route>

          <Route path="/shows" element={<Shows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
