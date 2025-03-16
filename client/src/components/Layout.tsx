import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThreeBackground from "./canvas/ThreeBackground";
import BackToTop from "./BackToTop";
import LanguageSwitcher from "./LanguageSwitcher";
import { useStore } from "@/lib/store";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isLoading } = useStore();
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {!isLoading && <ThreeBackground />}
      <Header />
      {children}
      <Footer />
      <BackToTop />
      <LanguageSwitcher />
    </div>
  );
}
