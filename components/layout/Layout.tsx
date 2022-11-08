import { FC, ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout

