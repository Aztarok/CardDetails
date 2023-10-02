"use client";

import { useEffect, useState } from "react";

const CardTransfer = ({ setName, setCardNum, setDate, setCvcNum }) => {
    const [cvc, setCvc] = useState("");

    useEffect(() => {
        const updateCardData = () => {
            const cardValue = localStorage.getItem("card");
            if (setCvcNum || cardValue) {
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

    useEffect(() => {
        setTimeout(() => {
            setCvcNum(cvc);
        }, 100);
    }, [setCvcNum, cvc]);

};

export default CardTransfer;
