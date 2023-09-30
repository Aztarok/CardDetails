"use client";

import React from "react";

const CardFront = ({ cardNum, name, date }) => {
    return (
        <div className="flex 2xl:ml-[3vw] 2xl:w-[75%] xl:w-[80%] lg:w-[90%] sm:w-[80%] sm:z-50">
            <img
                className="absolute mt-[8%] md:ml-[7%] sm:ml-[7%] ml-[7%]"
                src="./card-logo.svg"
                alt="card"
            />
            <img className="flex-1" src="./bg-card-front.png" alt="card" />
        </div>
    );
};

export default CardFront;
