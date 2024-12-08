import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/anasayfa" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
