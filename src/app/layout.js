import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plexMono.className}>{children}</body>
    </html>
  );
}
