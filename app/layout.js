import { StoreProvider } from "@/Context/dataSlice";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Covid Tracker",
  description: "A Covid tracker app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-slate-100">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
