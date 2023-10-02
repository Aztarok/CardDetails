const CardBack = ({ cvc }) => {
    return (
        <>
            <div className="flex self-end 2xl:w-[75%] xl:w-[80%] lg:w-[90%] sm:w-[80%] w-[70%] z-10 2xl:relative xl:relative lg:relative md:relative sm:absolute absolute">
                <img className="flex-1" src="./bg-card-back.png" alt="card" />
                <div className="absolute 2xl:mt-[5vw] 2xl:ml-[17vw] 2xl:text-[1.5vw] xl:mt-[6.05vw] xl:ml-[21vw] xl:text-[2vw] lg:text-[2vw] lg:mt-[5.8vw] lg:ml-[20vw] md:text-[1.5vw] md:mt-[5.4vw] md:ml-[18vw] sm:text-[5vw] sm:mt-[15.6vw] sm:ml-[53vw] text-[5vw] mt-[13.3vw] ml-[46vw]">
                    {cvc}
                </div>
            </div>
        </>
    );
};

export default CardBack;
