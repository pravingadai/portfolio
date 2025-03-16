import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThreeBackground from "../ui/three-background";
import CustomCursor from "../ui/custom-cursor";
import LoadingScreen from "../ui/loading-screen";
import BackToTop from "../ui/back-to-top";
import LanguageSwitcher from "../ui/language-switcher";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen />}
      <ThreeBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <LanguageSwitcher />
    </>
  );
};

export default Layout;
