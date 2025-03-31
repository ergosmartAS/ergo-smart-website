import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ergo Smart",
  description: "ErgoSmart AS er et norsk selskap etablert av yrkesaktive personer med solid helsefaglig bakgrunn. Vi utvikler og produserer ergonomiske, hygieniske vaskekluter spesielt designet for personlig hygiene. Vår ambisjon er å skape produkter som forbedrer hverdagen for mennesker med ulike behov og bidrar til økt komfort og velvære. Vi ønsker å være en pålitelig og bærekraftig leverandør med fokus på kvalitet, ergonomi og miljø."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
