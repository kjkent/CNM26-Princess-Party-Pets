const Basket = ({ basket }) => {
    return (
        <ul>
            {basket.map((item) => (
                <li>{item.title} - £{item.price}</li>
            ))}
        </ul>
    )
}

export default Basket