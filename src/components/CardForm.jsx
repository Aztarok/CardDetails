"use client";

import { useRouter } from "next/navigation";
import React from 'react'

const CardForm = () => {
    
    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();


        router.push("/complete");
    }
    return (
        <form className="flex flex-col w-[30em] gap-[2em]">
            {/* name */}
            <div>
                <label className="text-veryDarkViolet font-bold text-sm">CARDHOLDER NAME</label>
                <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g Jane Appleseed"/>
            </div>

            {/* Card number */}
            <div>
                <label className="text-veryDarkViolet font-bold text-sm">CARD NUMBER</label>
                <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g 1234 5678 9123 0000"/>
            </div>

            {/* Data and CVC */}
            <div>
                <div className="flex gap-[1em]">
                    <label className="text-veryDarkViolet font-bold text-sm">EXP. DATE (MM/YY)</label>
                    <label className="text-veryDarkViolet font-bold text-sm">CVC</label>
                </div>
                <div className="flex gap-2">
                    <input type="text" className="p-2 w-16 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md" placeholder="MM"/>
                    <input type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-16" placeholder="YY"/>
                    <input type="text" className="ml-2 p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g 123"/>
                </div>
            </div>

            {/* Button */}
            <button onClick={(e) => handleSubmit(e)} className="bg-veryDarkViolet rounded-md py-3">
                Confirm
            </button>
        </form>
    )
}

export default CardForm
