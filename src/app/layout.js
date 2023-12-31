import CardBack from "@/components/CardBack";
import CardFront from "@/components/CardFront";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Cards from "@/components/Cards";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <div className="bg-white flex h-screen justify-start relative xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
                    <Cards />
                    <img
                        src="./bg-main-desktop.png"
                        alt="desktop background"
                        className="2xl:w-[25vw] xl:w-[30%] lg:w-[30%] md:w-[25%] sm:w-[100%]  h-[30%] xl:h-full lg:h-full md:h-full sm:h-[50%] z-0"
                    />

                    <div className="flex flex-1 justify-center items-center bg-white">
                        {children}
                    </div>
                    <div className="2xl:absolute xl:absolute lg:absolute md:absolute bottom-0 right-0 sm:relative  text-veryDarkViolet font-bold text-xl  bg-blue-400 p-2">
                        Made by{" "}
                        <span className="h-10 underline-ffset-2 underline transition-all duration-500 hover:bg-gradient-to-r from-primaryOne to-primaryTwo hover:text-blue-300 hover:underline-white decoration-2">
                            <Link
                                target="_blank"
                                href="https://github.com/Aztarok"
                                passHref={true}
                            >
                                Aztarok
                            </Link>
                        </span>
                    </div>
                </div>
            </body>
        </html>
    );
}
