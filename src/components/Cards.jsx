"use client";

import React, { useState } from 'react'
import CardFront from "./CardFront"
import CardBack from "./CardBack"
import CardTransfer from "./CardTransfer";



const Cards = () => {

    const [cvc, setCvc] = useState("");

    useState
    return (

        <div>
            <CardTransfer setCvcNum={setCvc} show={false} />
            <CardFront />
            <CardBack cvc={cvc} />
        </div>
  )
}

export default Cards
