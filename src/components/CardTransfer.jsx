"use client";

import { useEffect, useState } from "react";

const CardTransfer = ({ show }) => {
    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [cvc, setCvc] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const updateCardData = () => {
            const cardValue = localStorage.getItem("card");
            if (cardValue) {
                const card = JSON.parse(cardValue);
                setName(card.name.toUpperCase());
                setCardNum(card.cardNum);
                setCvc(card.cvc);
                setDate(`${card.month} / ${card.year}`);
            }
        };

        // Update the card data when the component mounts
        updateCardData();

        // Listen for the custom event
        window.addEventListener("cardDataUpdated", updateCardData);

        return () => {
            // Clean up the event listener
            window.removeEventListener("cardDataUpdated", updateCardData);
        };
    }, []);

    // Rest of your component code

    return (
        <>
            {show ? (
                <>
                    <p className="absolute  mt-[4.5em] ml-[7.5%] text-3xl">
                        {cardNum}
                    </p>
                    <div className="flex justify-between w-[85%] absolute mt-[12.5em] ml-[7%]">
                        <p className="">{name}</p>
                        <p className="">{date}</p>
                    </div>
                    <div className="absolute text-xl mt-[88.5%] ml-[102%] z-30">
                        {cvc}
                    </div>
                </>
            ) : null}
        </>
    );
};

export default CardTransfer;
