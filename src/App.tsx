import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Communication from "./pages/Communication";
import Press from "./pages/Press";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/anasayfa" element={<Home />} />
          <Route path="/hakkımızda" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/iletisim" element={<Communication />} />
          <Route path="/basin" element={<Press />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
