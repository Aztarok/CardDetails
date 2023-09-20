"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CardTransfer = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    let card;
    useEffect(() => {
        let cardValue = (localStorage.getItem("card"));
        // cardcard = cardcard.replace(/[{}]/g, "");
        if (cardValue) {
            card = JSON.parse(cardValue);

            setName(card.name);
            setCardNum(card.cardNum);
            setMonth(card.month);
            setYear(card.year);
            setCvc(card.cvc);
        }
        
        router.refresh();
        console.log(card);
    }, [])
    


    return (
        <>
            <p className="absolute  mt-[4.5em] ml-[.75em] text-3xl">{cardNum}</p>
            <div className="flex justify-between w-[25em] absolute mt-[12.5em] ml-[1.5em]">
                <p className="">{name}</p>
                <p className="">{month}/{year}</p>
            </div>
            <div className="absolute text-xl mt-[19.5em] ml-[21.5em] z-30">
                {cvc}
            </div>
            
        </>
    );
}

export default CardTransfer;
