"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import ValidateInput from "./ValidateInput";

const CardForm = () => {
    // Initial Value
    const initialValue = {
        name: "Jane Appleseed",
        cardNum: "0000 0000 0000 0000",
        month: "00",
        year: "00",
        cvc: "000"
    };
    const [cardValues, setCardValues] = useState("");
    const [nameValid, setNameValid] = useState(false);
    const [cardValid, setCardValid] = useState(false);
    const [monthValid, setMonthValid] = useState(false);
    const [yearValid, setYearValid] = useState(false);
    const [cvcValid, setCvcValid] = useState(false);
    let checker = [nameValid, cardValid, monthValid, yearValid, cvcValid];

    const router = useRouter();

    useEffect(() => {
        if (initialValue) {
            setCardValues(JSON.stringify(initialValue));
            localStorage.setItem("card", JSON.stringify(initialValue));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("card", cardValues);
        if (!checker.includes(false)) {
            router.push("/complete");
        }
    };
    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col w-[30em] gap-[2em]"
        >
            {/* name */}
            <div>
                <label className="text-veryDarkViolet font-bold text-sm">
                    CARDHOLDER NAME
                </label>

                <ValidateInput
                    nameOfValidity={"name"}
                    classes={
                        "p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full"
                    }
                    setThisValue={setNameValid}
                />
            </div>

            {/* Card number */}
            <div>
                <label className="text-veryDarkViolet font-bold text-sm">
                    CARD NUMBER
                </label>
                <ValidateInput
                    nameOfValidity={"cardNum"}
                    classes={
                        "p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full"
                    }
                    setThisValue={setCardValid}
                />
            </div>

            {/* Data and CVC */}
            <div>
                <div className="flex gap-[1em]">
                    <label className="text-veryDarkViolet font-bold text-sm">
                        EXP. DATE (MM/YY)
                    </label>
                    <label className="text-veryDarkViolet font-bold text-sm">
                        CVC
                    </label>
                </div>
                <div className="flex gap-2">
                    <ValidateInput
                        nameOfValidity={"month"}
                        classes={
                            "p-2 w-16 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md"
                        }
                        setThisValue={setMonthValid}
                    />
                    <ValidateInput
                        nameOfValidity={"year"}
                        classes={
                            "p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-16"
                        }
                        setThisValue={setYearValid}
                    />
                    <ValidateInput
                        nameOfValidity={"cvc"}
                        classes={
                            "ml-2 p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full"
                        }
                        setThisValue={setCvcValid}
                    />
                </div>
            </div>

            {/* Button */}
            <button type="submit" className="bg-veryDarkViolet rounded-md py-3">
                Confirm
            </button>
        </form>
    );
};

export default CardForm;
