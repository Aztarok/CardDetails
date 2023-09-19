"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/complete");
    }

    return (
        <div className="flex items-center w-[40%] h-[40%]">
            <form className="flex flex-col w-[30em] gap-[2em]">
                {/* name */}
                <div>
                    <label className="text-veryDarkViolet font-bold">CARDHOLDER NAME</label>
                    <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g 1234 5678 9123 0000"/>
                </div>

                {/* Card number */}
                <div>
                    <label className="text-veryDarkViolet font-bold">CARD NUMBER</label>
                    <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g 1234 5678 9123 0000"/>
                </div>

                {/* Data and CVC */}
                <div>
                    <div className="flex gap-10">
                        <label className="text-veryDarkViolet font-bold">EXP. DATE (MM/YY)</label>
                        <label className="text-veryDarkViolet font-bold">CVC</label>
                    </div>
                    <div className="flex">
                        <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="MM"/>
                        <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="YY"/>
                        <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g 123"/>
                    </div>
                </div>

                {/* Button */}
                <button onClick={(e) => handleSubmit(e)} className="bg-veryDarkViolet rounded-md py-3">Confirm</button>
            </form>
        </div>
    )
}
