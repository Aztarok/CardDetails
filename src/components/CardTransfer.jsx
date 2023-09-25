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
                    <p className="absolute lg:mt-[30%] lg:ml-[7.5%] lg:text-3xl md:text-xl text-sm">
                        {cardNum}
                    </p>
                    <div className="flex justify-between w-[85%] absolute lg:mt-[45%] lg:ml-[7%] lg:text-lg">
                        <p className="">{name}</p>
                        <p className="">{date}</p>
                    </div>
                    <div className="absolute text-xl lg:mt-[88.5%] lg:ml-[69%] z-30">
                        {cvc}
                    </div>
                </>
            ) : null}
        </>
    );
};

export default CardTransfer;
