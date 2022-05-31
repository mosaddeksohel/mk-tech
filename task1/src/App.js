import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PopUnder from "./components/Add/PopUnder";
import Banner from "./components/Add/Banner";
import Native from "./components/Add/Native";
import Skim from "./components/Add/Skim";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<PopUnder />} />
            <Route path="pop" element={<PopUnder />} />
            <Route path="banner" element={<Banner />} />
            <Route path="native" element={<Native />} />
            <Route path="skim" element={<Skim />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
