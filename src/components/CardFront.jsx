"use client";

import React from "react";

const CardFront = ({ cardNum, name, date }) => {
    return (
        <div className="flex 2xl:ml-[3vw] 2xl:w-[75%] xl:w-[80%] lg:w-[90%] sm:w-[80%] sm:z-50">
            <img
                className="absolute 2xl:mt-[1.5vw] 2xl:ml-[1vw] xl:mt-[2vw] xl:ml-[1.5vw] md:mt-[2vw] md:ml-[2vw]"
                src="./card-logo.svg"
                alt="card"
            />
            <span className="absolute 2xl:text-[1.5vw] 2xl:mt-[6vw] 2xl:ml-[1vw] xl:text-[2vw] xl:mt-[8vw] xl:ml-[1.5vw] md:text-[2vw] md:mt-[8vw] md:ml-[1.5vw]">
                {cardNum}
            </span>
            <div className="absolute flex justify-between 2xl:mt-[10vw] 2xl:text-[clamp(20px,1vw,28px)] 2xl:w-[70%] 2xl:ml-[0.65vw] xl:mt-[13vw] xl:text-[1vw] xl:w-[70%] xl:ml-[1.5vw] md:mt-[12vw] md:w-[80%] md:ml-[1.5vw]">
                <span className="">{name}</span>
                <span className="">{date}</span>
            </div>
            <img className="flex-1" src="./bg-card-front.png" alt="card" />
        </div>
    );
};

export default CardFront;
