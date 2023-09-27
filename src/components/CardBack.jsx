"use client";

import React, { useState } from 'react'
import CardTransfer from "./CardTransfer";

const CardBack = () => {

    const [cvc, setCvc] = useState(0);
    console.log(cvc)

    return (
        <>
            <CardTransfer setNum={setCvc} />
            <div className="flex self-end absolute rounded-xl xl:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] xl:w-[80%] lg:w-[90%] sm:w-[80%]">
                    <img className="" src="./bg-card-back.png" alt="card" />
                    <div className="absolute  z-40 bg-black text-xl">
                        {cvc}
                    </div>
            </div>
        </>
    )
}

export default CardBack
