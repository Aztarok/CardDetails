

const CardBack = ({cvc}) => {

    return (
        <>
            <div className="absolute xl:w-[20vw] xl:mt-[25vh] bg-red-600">
                    <img className="" src="./bg-card-back.png" alt="card" />
                    <div className="absolute ml-[25vw] z-50  text-xl">
                        {cvc}
                    </div>
            </div>
        </>
    )
}

export default CardBack
