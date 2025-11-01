import type { Metadata } from "next";
import "../styles/globals.css"
import { Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Riser - Premium Digital Agency",
  description: "Transforming ideas into exceptional digital experiences. Full-stack development, stunning design, and measurable results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
