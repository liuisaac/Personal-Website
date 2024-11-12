import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Banners/Navbar.jsx";

import './index.css' 

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  </>
);

export default App;
