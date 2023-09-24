"use client";

import { useEffect, useState } from "react";

const ValidateInput = ({ nameOfValidity, classes, setThisValue, setValue }) => {
    // Finding out what type of validation this input will be checking for
    const type = nameOfValidity;

    // Validation Regex for Checks
    const nameRegex =
        /^[\p{Lu}\p{Pd},][\p{L}\p{Mn}\p{Pd},]*\s[\p{Lu}\p{Pd},][\p{L}\p{Mn}\p{Pd},]*$/u;
    const cardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/i;
    const monthRegex = /^(0[1-9]|1[0-2])$/i;
    const yearRegex = /^[0-9]{2}$/i;
    const cvcRegex = /^[0-9]{3}$/i;

    // Applying styles depending if the input is focused or not
    const [isFocused, setIsFocused] = useState(false);

    // Validation Check Variables
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);
    let currentRegex = "";
    let place = "";

    if (type === "name") {
        currentRegex = nameRegex;
        place = "e.g. Jane Appleseed";
    } else if (type === "cardNum") {
        currentRegex = cardRegex;
        place = "e.g. 1234 5678 9123 0000";
    } else if (type === "month") {
        currentRegex = monthRegex;
        place = "MM";
    } else if (type === "year") {
        currentRegex = yearRegex;
        place = "YY";
    } else {
        currentRegex = cvcRegex;
        place = "e.g. 123";
    }

    useEffect(() => {
        return () => {
            // Clean up the timeout when the component unmounts
            clearTimeout(typingTimeout);
        };
    }, [typingTimeout]);

    const validateCard = (input) => {
        // Regular expression to check if the input is in email format
        let check = currentRegex.test(input);
        setThisValue(check);
        return check;
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
        clearTimeout(typingTimeout);
        setValue(inputValue);

        setIsTyping(true);

        if (inputValue.trim() === "") {
            setErrorMessage("");
        } else {
            setTypingTimeout(
                setTimeout(() => {
                    setIsTyping(false);
                    console.log(errorMessage);
                    if (!validateCard(inputValue)) {
                        setErrorMessage(`Valid ${type} required`);
                    } else {
                        setErrorMessage("");
                    }
                }, 1000)
            );
        }
    };
    return (
        <>
            {!isTyping && errorMessage ? (
                <>
                    <input
                        onChange={handleInputChange}
                        value={name}
                        type="text"
                        className={`${classes} bg-red-600`}
                        placeholder={`${place}`}
                    />
                </>
            ) : (
                <input
                    onChange={handleInputChange}
                    value={name}
                    type="text"
                    className={`${classes} ${
                        isFocused ? "gradient-border" : ""
                    }`}
                    placeholder={`${place}`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            )}
        </>
    );
};

export default ValidateInput;
