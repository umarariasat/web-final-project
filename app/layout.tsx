
import "./globals.css";
import { Silkscreen } from "next/font/google";

const pixelFont = Silkscreen({
  weight: ["400", "700"],
  variable: "--font-pixel",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixelFont.variable}>
        {children}
      </body>
    </html>
  );
}