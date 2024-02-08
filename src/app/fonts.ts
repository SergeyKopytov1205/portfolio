import { Raleway, Poppins, Courier_Prime } from "next/font/google";

export const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family",
});

export const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--second-family",
});

export const courierPrime = Courier_Prime({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--third-family",
});
