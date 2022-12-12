import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FC } from "react";

interface LayoutProps {
  children: JSX.Element;
}

export const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
