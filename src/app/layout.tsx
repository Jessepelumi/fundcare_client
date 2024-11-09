import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import { Sen } from "next/font/google";

const sen = Sen({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fund Care",
  description: "Empowering Health, Enabling Impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sen.className}>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
