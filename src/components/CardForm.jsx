"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo, useRef } from "react";
import ValidateInput from "./ValidateInput";
import CardTransfer from "./CardTransfer";

const CardForm = () => {
    // Initial Values
    const [nameValid, setNameValid] = useState(false);
    const [cardValid, setCardValid] = useState(false);
    const [monthValid, setMonthValid] = useState(false);
    const [yearValid, setYearValid] = useState(false);
    const [cvcValid, setCvcValid] = useState(false);
    // let checker = [nameValid, cardValid, monthValid, yearValid, cvcValid];
    let checker = [nameValid];

    const [currentName, setCurrentName] = useState("");
    const [currentCard, setCurrentCard] = useState("");
    const [currentMonth, setCurrentMonth] = useState("");
    const [currentYear, setCurrentYear] = useState("");
    const [currentCvc, setCurrentCvc] = useState("");

    const router = useRouter();
    const initialValue = useMemo(() => getValues(), []);
    const movies = useRef(null);
    function getValues() {
        return currentName === ""
            ? {
                  name: "Jane Appleseed",
                  cardNum: "0000 0000 0000 0000",
                  month: "00",
                  year: "00",
                  cvc: "000"
              }
            : {
                  name: currentName,
                  cardNum: currentCard,
                  month: currentMonth,
                  year: currentYear,
                  cvc: currentCvc
              };
    }

    useEffect(() => {
        if (initialValue) {
            localStorage.setItem("card", JSON.stringify(initialValue));
        }
    }, [initialValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checker.includes(false)) {
            movies.current = {
                name: currentName,
                cardNum: currentCard,
                month: currentMonth,
                year: currentYear,
                cvc: currentCvc
            };
            localStorage.setItem("card", JSON.stringify(movies.current));
            const event = new Event("cardDataUpdated");
            window.dispatchEvent(event);
            router.push("/complete");
        }
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col w-[30em] gap-[2em]"
        >
            <CardTransfer show={false} />
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
                    setValue={setCurrentName}
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
                    setValue={setCurrentCard}
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
                        setValue={setCurrentMonth}
                    />
                    <ValidateInput
                        nameOfValidity={"year"}
                        classes={
                            "p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-16"
                        }
                        setThisValue={setYearValid}
                        setValue={setCurrentYear}
                    />
                    <ValidateInput
                        nameOfValidity={"cvc"}
                        classes={
                            "ml-2 p-2 text-sm border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full"
                        }
                        setThisValue={setCvcValid}
                        setValue={setCurrentCvc}
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
