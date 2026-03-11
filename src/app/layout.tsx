import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raymond Joseph | Frontend Developer",
  description:
    "Frontend Developer crafting clean, fast, and responsive web experiences. Explore my work and let's build something great together.",
  openGraph: {
    title: "Raymond Joseph | Frontend Developer",
    description:
      "Frontend Developer crafting clean, fast, and responsive web experiences. Explore my work and let's build something great together.",
    images: [
      {
        url: "../../public/png/WhatsApp_Image_2024-12-03_at_16.19.56-removebg-preview-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Raymond Joseph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Joseph | Frontend Developer",
    description:
      "Frontend Developer crafting clean, fast, and responsive web experiences.",
    images:
      "../../public/png/WhatsApp_Image_2024-12-03_at_16.19.56-removebg-preview-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Nav />
        {children}

        <Footer />
      </body>
    </html>
  );
}
