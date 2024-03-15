import {
  Federo,
  Poppins,
  Rubik,
  Public_Sans,
  Merienda,
  Roboto_Condensed,
  Noto_Sans,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const federo = Federo({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-federo",
});
const public_Sans = Public_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public",
});

const merienda = Merienda({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merienda",
});

const cond_Robot = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-robotoCondensed",
});

const noto_Sans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-notoSans",
});

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${federo.variable} ${rubik.variable} ${public_Sans.variable}
       ${merienda.variable}
       ${cond_Robot.variable}
       ${noto_Sans.variable}
        `}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
