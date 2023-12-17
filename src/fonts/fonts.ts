import {
  Inter,
  Lato,
  Playfair_Display,
  Source_Code_Pro,
  Poppins
} from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

export const lato = Lato({
  style: "normal",
  weight: "300",
  subsets: ["latin"],
});
export const latoItalic = Lato({
  style: "italic",
  weight: "400",
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export const SourceCodePro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
});

export const PoppinsFont = Poppins({
  weight: "400",
  subsets: ["latin"],
});
