import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Inter, PT_Sans_Caption } from "next/font/google";
import { CallToAction } from "@/templates/landing-page/sections";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} dark relative flex  min-h-screen flex-col`}
    >
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
};
