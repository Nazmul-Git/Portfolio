import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/common/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Your Name",
  description: "Showcasing my work, projects, and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-white`}
      >
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
