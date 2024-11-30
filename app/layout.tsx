import type { Metadata } from "next";
import { Baloo_2, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const baloo2 = Baloo_2({
  subsets: ["latin-ext"],
});

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Coffee Delivery",
  description: "Coffee Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* {bg-backgroundColor} */}
      <body
        className={`${baloo2.className} ${roboto.className} bg-backgroundColor antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
