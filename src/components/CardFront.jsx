"use client";

import React from "react";

const CardFront = ({ cardNum, name, date }) => {
    return (
        <div className="flex 2xl:ml-[3vw] 2xl:w-[75%] xl:w-[80%] lg:w-[90%] sm:w-[80%] sm:z-50">
            <img
                className="absolute 2xl:mt-[2vh] 2xl:ml-[1vw]"
                src="./card-logo.svg"
                alt="card"
            />
            <span className="absolute">{cardNum}</span>
            <span className="absolute">{name}</span>
            <span className="absolute">{date}</span>
            <img className="flex-1" src="./bg-card-front.png" alt="card" />
        </div>
    );
};

export default CardFront;
