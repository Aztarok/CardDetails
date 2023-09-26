"use client";

import { useEffect, useState } from "react";

const ValidateInput = ({ nameOfValidity, classes, setThisValue, setValue, divClasses }) => {
    const type = nameOfValidity;

    const validationRegex = {
        name: /^[\p{Lu}\p{Pd},][\p{L}\p{Mn}\p{Pd},]*\s[\p{Lu}\p{Pd},][\p{L}\p{Mn}\p{Pd},]*$/u,
        cardNum: /^4[0-9]{12}(?:[0-9]{3})?$/i,
        month: /^(0[1-9]|1[0-2])$/i,
        year: /^[0-9]{2}$/i,
        cvc: /^[0-9]{3}$/i,
    };

    const currentRegex = validationRegex[type];
    const place = {
        name: "e.g. Jane Appleseed",
        cardNum: "e.g. 1234 5678 9123 0000",
        month: "MM",
        year: "YY",
        cvc: "e.g. 123",
    }[type];

    const errors = {
        name: "Valid name required",
        cardNum: "Valid Card Number required",
        month: "Valid month required",
        year: "Valid year required",
        cvc: "Valid CVC required",
    }[type];

    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);

    useEffect(() => {
        return () => {
            clearTimeout(typingTimeout);
        };
    }, [typingTimeout]);

    const validateCard = (input) => {
        const check = currentRegex.test(input);
        setThisValue(check);
        return check;
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
        clearTimeout(typingTimeout);
        setValue(inputValue);

        setIsTyping(true);

        // Clear the error message when the user starts typing again
        setErrorMessage("");

        if (inputValue.trim() === "") {
            setErrorMessage("");
        } else {
            setTypingTimeout(
                setTimeout(() => {
                    setIsTyping(false);
                    if (!validateCard(inputValue)) {
                        setErrorMessage(`${errors}`);
                    } else {
                        setErrorMessage("");
                    }
                }, 1000)
            );
        }
    };

    return (
        <div className={`${divClasses} border-none`}>
            <input
                onChange={handleInputChange}
                value={name}
                type="text"
                className={`box-border w-[100%] ${classes} ${!errorMessage && isFocused ? "gradient-border" : ""} ${
                    !isTyping && errorMessage ? "border-red-600 outline-none" : ""
                }`}
                placeholder={place}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {errorMessage && <span className="text-red-600 flex absolute text-xs">{errorMessage}</span>}
        </div>
    );
};

export default ValidateInput;
