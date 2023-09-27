import CardBack from "./CardBack";
import CardTransfer from "./CardTransfer";

const Cards = () => {
    return (
            <div className="flex absolute xl:mt-[8%] xl:ml-[10%] xl:h-[65%] lg:ml-[10%] lg:mt-[10%] lg:w-[35%] lg:h-[62%] h-[50%] sm:w-[40%] sm:mt-[20%] sm:ml-[7%] sm:h-[50%]">
            <div className="flex flex-1 justify-end">
                <div className="absolute ml-auto xl:w-[80%] lg:w-[90%] sm:w-[80%]">
                    <img
                        className="absolute mt-[8%] md:ml-[7%] sm:ml-[7%] ml-[7%]"
                        src="./card-logo.svg"
                        alt="card"
                    />
                    <CardTransfer show={true} />
                    <img className="" src="./bg-card-front.png" alt="card" />
                </div>
            </div>

            <CardBack />
        </div>
    );
};

export default Cards;
