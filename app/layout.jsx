import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer"

const montserrat = Montserrat({
	subsets: ["latin"],
});

export const metadata = {
	title: "Funmi Dada Portfolio",
	description:
		"a portfolio webpage that showcases my skills has Frontend Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
