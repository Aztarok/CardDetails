"use client";

import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardTransfer from "./CardTransfer";

const Cards = () => {
    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setCvc] = useState("");

    useState;
    return (
        <div className="absolute flex flex-col gap-[5vh] 2xl:h-[5vh] 2xl:w-[30vw] 2xl:mt-[20vh] 2xl:ml-[10vh] xl:h-[5vh] xl:w-[35vw] xl:mt-[25vw] xl:ml-[8vw] md:h-[5vw] md:w-[30vw] md:mt-[25vw] md:ml-[10vw]">
            <CardTransfer
                setName={setName}
                setCardNum={setCardNum}
                setDate={setDate}
                setCvcNum={setCvc}
                show={false}
            />
            <CardFront name={name} cardNum={cardNum} date={date} />
            <CardBack cvc={cvc} />
        </div>
    );
};

export default Cards;
