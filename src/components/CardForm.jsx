"use client";

import { useRouter } from "next/navigation";
import React, {useState, useEffect } from 'react';



const CardForm = () => {
    // Checks
    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u; 
    const cardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/i;
    
    const initialValue = {
        "name": "Jane Appleseed",
        "cardNum": "0000 1000 0000 0010",
        "month": "00",
        "year": "00",
        "cvc": "000"
    };
    const [card, setCard] = useState(initialValue);
    const [cardValues, setCardValues] = useState("");
    
    // Validation for the card input
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);

    const router = useRouter();
    

    useEffect(() => {
        if (card === initialValue) {
            setCardValues(JSON.stringify(card));
            localStorage.setItem("card", JSON.stringify(card));
        }
    }, []);

    const validateCard = (input) => {
        // Regular expression to check if the input is in email format
        return cardRegex.test(input);
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
        clearTimeout(typingTimeout);

        setIsTyping(true);

        if (inputValue.trim() === "") {
            setErrorMessage("");
        } else {
            setTypingTimeout(
                setTimeout(() => {
                    setIsTyping(false);
                    console.log(errorMessage)
                    if (!validateCard(inputValue)) {
                        setErrorMessage("Valid email required");
                        
                    } else {
                        setErrorMessage("");
                    }
                }, 1000)
            );
        }
    };

    useEffect(() => {
        return () => {
            // Clean up the timeout when the component unmounts
            clearTimeout(typingTimeout);
        };
    }, [typingTimeout]);




    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("card", cardValues);
        
        router.push("/complete");
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-[30em] gap-[2em]">
            {/* name */}
            <div>
                <label className="text-veryDarkViolet font-bold text-sm">CARDHOLDER NAME</label>
                {!isTyping && errorMessage ? (
                    <input onChange={handleInputChange} value={name} type="text" className="p-2 bg-red-600 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g Jane Appleseed"/>
                ) : (
                    <input onChange={handleInputChange} value={name} type="text" className="p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full" placeholder="e.g Jane Appleseed"/>
                )}
               
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
            <button type="submit" className="bg-veryDarkViolet rounded-md py-3">
                Confirm
            </button>
        </form>
    )
}

export default CardForm
