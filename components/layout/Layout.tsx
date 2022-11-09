import { FC, ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from './styles.module.scss';
interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout

