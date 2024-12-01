import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import { baloo2, roboto } from "./fonts/fonts";

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
