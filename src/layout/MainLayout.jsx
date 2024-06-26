import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeContainer from "../components/ThemeContainer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ThemeContainer />
      <main className="align-element">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
