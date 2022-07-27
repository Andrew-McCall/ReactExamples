const Basket = ({basket, remove}) => {

    return(
    <div>

        {basket.map((i, index) => {
            return (
            <div>
            <label>{i.name}</label>
            <button onClick={e => {remove(index)}}>X</button>
            </div>
            )
        })}

    </div>
    )

}

export default Basket;