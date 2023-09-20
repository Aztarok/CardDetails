"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CardTransfer from "@/components/CardTransfer";

export default function Complete() {

    const router = useRouter();
    return (
        <div className="flex flex-col gap-4 items-center w-[40%] h-[40%]">
            <div className="relative w-[5em] h-[5em]">
                <Image src="./icon-complete.svg" alt="checkmark" layout="fill"/>
            </div>
            <p className="text-3xl font-bold pt-3 text-veryDarkViolet">THANK YOU!</p>
            <p className="font-semibold text-wowViolet">We&apos;ve added your card details</p>
            <button onClick={() => router.push("/")} className="text-white my-auto bg-veryDarkViolet rounded-lg w-[20em] h-[3em]">
                Continue
            </button>
        </div>
    )
}
