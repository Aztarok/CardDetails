import CardTransfer from "@/components/CardTransfer";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-white flex h-screen justify-start relative">
                    <img
                        src="./bg-main-desktop.png"
                        alt="desktop background"
                        className=""
                    />
                    <div className="absolute mt-[8%] ml-[10%]">
                        <img
                            className="absolute mt-[3.5em] ml-[1.5em]"
                            src="./card-logo.svg"
                            alt="card"
                        />
                        <CardTransfer />
                        <img
                            className=""
                            src="./bg-card-front.png"
                            alt="card"
                        />
                    </div>
                    <div className="absolute mt-[27%] ml-[15%]  rounded-xl shadow-[0_-20px_20px_rgb(0,0,0,0.12)]">
                        <img className="" src="./bg-card-back.png" alt="card" />
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        {children}
                    </div>
                    <div className="absolute bottom-0 mb-10 right-1/2 text-veryDarkViolet font-bold text-xl">
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
