"use client";

import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardTransfer from "./CardTransfer";

const Cards = () => {
    const [cvc, setCvc] = useState("");

    useState;
    return (
        <div className="absolute flex flex-col gap-[5vh] 2xl:h-[5vh] 2xl:w-[30vw] 2xl:mt-[20vh] 2xl:ml-[10vh]">
            <CardTransfer setCvcNum={setCvc} show={false} />
            <CardFront />
            <CardBack cvc={cvc} />
        </div>
    );
};

export default Cards;
