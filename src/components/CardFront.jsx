"use client";

import React from 'react'

const CardFront = ({ cardNum, name, date }) => {

    

    return (
        <div>
            <div className="flex flex-1 ]">
                <div className="absolute ml-auto xl:w-[80%] lg:w-[90%] sm:w-[80%] sm:z-50">
                    <img
                        className="absolute mt-[8%] md:ml-[7%] sm:ml-[7%] ml-[7%]"
                        src="./card-logo.svg"
                        alt="card"
                    />
                    <img className="sm:w-[80%]" src="./bg-card-front.png" alt="card" />
                </div>
            </div>

        </div>
    )
}

export default CardFront
