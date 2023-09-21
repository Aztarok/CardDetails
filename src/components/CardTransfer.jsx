"use client";

import { useState, useEffect } from "react";

const CardTransfer = () => {

    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [cvc, setCvc] = useState("");
    const [date, setDate] = useState("");
    let card;
    let dataCheck = 1;
    
    useEffect(() => {
        const timer = setTimeout(() => {
            let cardValue = (localStorage.getItem("card"));
            // cardcard = cardcard.replace(/[{}]/g, "");
            if (cardValue) {
                card = JSON.parse(cardValue);   
                setName(card.name);
                setCardNum(card.cardNum);
                setCvc(card.cvc);
                setDate(`${card.month} /\ ${card.year}`);
            }
        }, 10)

        return () => clearTimeout(timer);

    }, [dataCheck])
    


    return (
        <>
            <p className="absolute  mt-[4.5em] ml-[.75em] text-3xl">{cardNum}</p>
            <div className="flex justify-between w-[25em] absolute mt-[12.5em] ml-[1.5em]">
                <p className="">{name}</p>
                <p className="">{date}</p>
            </div>
            <div className="absolute text-xl mt-[19.5em] ml-[21.5em] z-30">
                {cvc}
            </div>
            
        </>
    );
}

export default CardTransfer;
