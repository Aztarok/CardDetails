"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Complete() {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-[4%] items-center w-[40vw] xl:h-[40vw] xl:mt-[10vw] lg:h-[40vw] lg:mt-[10vw] md:h-[40vw] md:mt-[10vw] sm:h-[40vw] sm:mt-[20vw] h-[80vw] mt-[30vw]">
            <div className="relative w-[5em] h-[5em]">
                <Image
                    src="./icon-complete.svg"
                    alt="checkmark"
                    layout="fill"
                />
            </div>
            <p className="text-3xl font-bold pt-3 text-veryDarkViolet">
                THANK YOU!
            </p>
            <p className="font-semibold text-wowViolet">
                We&apos;ve added your card details
            </p>
            <button
                onClick={() => router.push("/")}
                className="mt-[4%] text-white bg-veryDarkViolet rounded-lg w-[20em] h-[3em]"
            >
                Continue
            </button>
        </div>
    );
}
