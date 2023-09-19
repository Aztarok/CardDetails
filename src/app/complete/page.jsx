"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Complete() {

    const router = useRouter();
    return (
        <div className="bg-white flex max-h-screen justify-start relative">
            <img src="./bg-main-desktop.png" alt="desktop background" className=""/>
            <div className="absolute mt-[8%] ml-[10%]"><img className="" src="./bg-card-front.png" alt="card"/></div>
            <div className="absolute mt-[27%] ml-[15%]  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <img className="" src="./bg-card-back.png" alt="card"/></div>
            <div className="flex flex-1 justify-center items-center">
                    <div className="flex flex-col gap-4 items-center w-[40%] h-[40%]">
                    <div className="relative w-[5rem] h-[5rem]">
                        <Image src="./icon-complete.svg" alt="checkmark" layout="fill"/>
                    </div>
                    <p className="text-3xl font-bold pt-3 text-veryDarkViolet">THANK YOU!</p>
                    <p className="font-semibold text-wowViolet">We&apos;ve added your card details</p>
                        <button onClick={() => router.push("/")} className="text-white my-auto bg-veryDarkViolet rounded-lg w-[20rem] h-[3rem]">Continue</button>
                </div>
                
            </div>
        </div>
    )
}
