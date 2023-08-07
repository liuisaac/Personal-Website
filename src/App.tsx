import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";

import './index.css' 

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  </>
);

export default App;
