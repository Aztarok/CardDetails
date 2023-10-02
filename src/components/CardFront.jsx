"use client";

import React from "react";

const CardFront = ({ cardNum, name, date }) => {
    return (
        <div className="flex 2xl:ml-[3vw] 2xl:w-[75%] xl:w-[80%] lg:w-[90%] sm:w-[80%] 2xl:mt-[0vw] xl:mt-[0vw] lg:mt-[0vw] md:mt-[0vw] sm:mt-[22.3vw] z-50 mt-[22vw] w-[70%]">
            <img
                className="absolute 2xl:mt-[1.5vw] 2xl:ml-[1vw] xl:mt-[2vw] xl:ml-[1.5vw] lg:mt-[2vw] lg:ml-[1.5vw] md:mt-[2vw] md:ml-[2vw] md:w-[5vw] sm:mt-[4vw] sm:ml-[4vw] mt-[3vw] ml-[3vw]"
                src="./card-logo.svg"
                alt="card"
            />
            <span className="absolute 2xl:text-[1.5vw] 2xl:mt-[6vw] 2xl:ml-[1vw] xl:text-[2vw] xl:mt-[8vw] xl:ml-[1.5vw] lg:text-[2vw] md:text-[1.5vw] md:mt-[7vw] md:ml-[1.5vw] sm:text-[5.5vw] sm:mt-[20vw] sm:ml-[3.5vw] text-[5vw] mt-[15vw] ml-[3vw]">
                {cardNum}
            </span>
            <div className="absolute flex justify-between 2xl:mt-[10vw] 2xl:text-[clamp(20px,1vw,28px)] 2xl:w-[70%] 2xl:ml-[0.65vw] xl:mt-[13vw] xl:text-[1vw] xl:w-[70%] xl:ml-[1.5vw] lg:text-[1vw] lg:w-[80%] lg:mt-[12vw] md:mt-[11vw] md:w-[70%] md:ml-[1.4vw] md:text-[1vw] sm:text-[3vw] sm:ml-[4vw] sm:mt-[32vw] sm:w-[70%] text-[2.5vw] ml-[4.5vw] mt-[28vw] w-[60%]">
                <span className="">{name}</span>
                <span className="">{date}</span>
            </div>
            <img className="flex-1" src="./bg-card-front.png" alt="card" />
        </div>
    );
};

export default CardFront;
