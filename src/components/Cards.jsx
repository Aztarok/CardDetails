import React from "react";
import CardTransfer from "./CardTransfer";

const Cards = () => {
    return (
            <div className="flex absolute lg:ml-[10%] lg:mt-[7%] lg:w-[33%] lg:h-[70%] h-[50%] sm:w-[40%] sm:mt-[20%] sm:ml-[7%] sm:h-[50%]">
            <div className="flex flex-1 justify-end">
                <div className="absolute ml-auto sm:w-[80%]">
                    <img
                        className="absolute mt-[8%] md:ml-[7%] sm:ml-[7%] ml-[7%]"
                        src="./card-logo.svg"
                        alt="card"
                    />
                    <CardTransfer show={true} />
                    <img className="" src="./bg-card-front.png" alt="card" />
                </div>
            </div>

            <div className="flex self-end absolute rounded-xl xl:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:w-[80%]">
                <img className="" src="./bg-card-back.png" alt="card" />
            </div>
        </div>
    );
};

export default Cards;
