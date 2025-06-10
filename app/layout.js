import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";             // core Swiper styles
import "swiper/css/navigation";  // only if you’re using the Navigation module
import "swiper/css/pagination";  // only if you’re using the Pagination module

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
  title: "Ergo Smart – Innovative ergonomiske løsninger",
  description:
    "Vi utvikler ergonomiske og innovative løsninger som gjør pleie enklere, mer skånsomt og effektivt. Vår visjon er å forbedre både arbeidshverdagen for helsepersonell og livskvaliteten for mennesker. Gjennom kvalitet og brukervennlighet skaper vi produkter som gir bedre hygiene, mindre belastning og mer verdighet.",
  
  
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb_NO">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
