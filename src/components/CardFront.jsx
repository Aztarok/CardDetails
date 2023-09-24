import React from "react";
import CardTransfer from "./CardTransfer";

const CardFront = () => {
    return (
        <div className="absolute mt-[10%] ml-[16%]">
            <div>
                <img
                    className="absolute mt-[8%] ml-[7%]"
                    src="./card-logo.svg"
                    alt="card"
                />
                <CardTransfer show={true} />
                <img className="" src="./bg-card-front.png" alt="card" />
            </div>
        </div>
    );
};

export default CardFront;
