const CardBack = ({ cvc }) => {
    return (
        <>
            <div className="flex self-end 2xl:w-[75%] xl:w-[80%] lg:w-[90%] sm:w-[80%] sm:z-50">
                <img className="flex-1" src="./bg-card-back.png" alt="card" />
                <div className="absolute 2xl:mt-[10.1vh] 2xl:ml-[17vw] 2xl:text-3xl">
                    {cvc}
                </div>
            </div>
        </>
    );
};

export default CardBack;
