import { Inter } from "next/font/google";
import "./globals.css";
import BarPet from "@/components/BarPet";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PetAlert",
  description: "Creado por Onyx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BarPet />
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
