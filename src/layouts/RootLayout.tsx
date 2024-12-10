import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-[127px] lg:mt-[130px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
