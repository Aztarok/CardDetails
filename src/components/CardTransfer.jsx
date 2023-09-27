"use client";

import { useEffect, useState } from "react";

const CardTransfer = ({ show, setNum }) => {
    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [cvc, setCvc] = useState("");
    const [date, setDate] = useState("");

    const updateNum = async () => {
        await setNum(cvc);
    }
    
    const updateCardData = () => {
        const cardValue = localStorage.getItem("card");
        if (cardValue) {
            const card = JSON.parse(cardValue);
            setName(card.name.toUpperCase());
            setCardNum(card.cardNum);
            setCvc(card.cvc);
            setDate(`${card.month} / ${card.year}`);
            console.log(setNum)
            if (setNum) {
                updateNum();
            }
        }
    };
    
    useEffect(() => {

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
                    <p className="absolute xl:text-3xl xl:mt-[26%] lg:mt-[30%] lg:ml-[7.5%] lg:text-xl md:text-xl text-sm">
                        {cardNum}
                    </p>
                    <div className="flex justify-between w-[85%] absolute xl:text-xl lg:mt-[43%] lg:ml-[7%] lg:text-md">
                        <p className="">{name}</p>
                        <p className="">{date}</p>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default CardTransfer;
