import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Create By Mohammed Refat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* header */}
          <Header />
          {/* navbar */}
          <Navbar />
          {/* searchbox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
