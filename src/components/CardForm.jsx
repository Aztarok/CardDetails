"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo, useRef } from "react";
import ValidateInput from "./ValidateInput";

const CardForm = () => {
    const [sendingNameValue, setSendingNameValue] = useState(true);
    const [sendingCardValue, setSendingCardValue] = useState(true);
    const [sendingDateValue, setSendingDateValue] = useState(true);
    const [sendingCvcValue, setSendingCvcValue] = useState(true);
    // Initial Values
    const [nameValid, setNameValid] = useState(false);
    const [cardValid, setCardValid] = useState(false);
    const [monthValid, setMonthValid] = useState(false);
    const [yearValid, setYearValid] = useState(false);
    const [cvcValid, setCvcValid] = useState(false);
    let checker = [nameValid, cardValid, monthValid, yearValid, cvcValid];

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
            className="flex flex-col w-[30em] sm:ml-auto sm:w-[90%]  gap-[5vh]"
        >
            {/* name */}
            <div>
                <label className="text-veryDarkViolet font-bold text-sm">
                    CARDHOLDER NAME
                </label>

                <ValidateInput
                    nameOfValidity={"name"}
                    classes={
                        "p-2 text-md border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full outline-none"
                    }
                    setThisValue={setNameValid}
                    setValue={setCurrentName}
                    sendBack={setSendingNameValue}
                />

                {!sendingNameValue ? (
                    <div className="text-redError absolute">Enter a valid name</div>
                ) : null}
            </div>

            {/* Card number */}
            <div>
                <label className="text-veryDarkViolet font-bold text-sm">
                    CARD NUMBER
                </label>
                <ValidateInput
                    nameOfValidity={"cardNum"}
                    classes={
                        "p-2 text-md border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md w-full"
                    }
                    setThisValue={setCardValid}
                    setValue={setCurrentCard}
                    sendBack={setSendingCardValue}
                />
            </div>

            {/* Data and CVC */}
            <div>
                <div className="flex gap-[2.4vw]">
                    <label className="text-veryDarkViolet font-bold text-sm">
                        EXP. DATE (MM/YY)
                    </label>
                    <label className="text-veryDarkViolet font-bold text-sm">
                        CVC
                    </label>
                </div>
                <div className="grid grid-cols-10 gap-2 w-[100%]">
                    <div className="flex col-span-4 gap-2 flex-wrap">
                        <div className="flex gap-2">
                            <ValidateInput
                                nameOfValidity={"month"}
                                divClasses={"col-span-2"}
                                classes={
                                    "text-md p-2 border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md flex flex-wrap"
                                }
                                setThisValue={setMonthValid}
                                setValue={setCurrentMonth}
                                sendBack={setSendingDateValue}
                            />

                            <ValidateInput
                                nameOfValidity={"year"}
                                divClasses={"col-span-2"}
                                classes={
                                    "text-md p-2 border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md flex flex-wrap"
                                }
                                setThisValue={setYearValid}
                                setValue={setCurrentYear}
                                sendBack={setSendingDateValue}
                            />
                        </div>

                        {!sendingDateValue ? (
                            <div className="absolute mt-[5.5vh] text-redError">
                                Valid date required
                            </div>
                        ) : null}
                    </div>
                    <ValidateInput
                        nameOfValidity={"cvc"}
                        divClasses={"ml-2 col-span-6"}
                        classes={
                            "text-md p-2 border-lightGrayishViolet text-wowViolet placeholder-wowViolet border-2 rounded-md flex flex-wrap"
                        }
                        setThisValue={setCvcValid}
                        setValue={setCurrentCvc}
                        sendBack={setSendingCvcValue}
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
