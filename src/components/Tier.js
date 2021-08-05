import { FaShoppingBasket } from "react-icons/fa"

const Tier = ({ item, select }) => {
    return (
        <div>
            <h3>
                {item.title} - £{item.price} <FaShoppingBasket style={{ cursor: "pointer" }} onClick={() => select(item.id)} />
            </h3>
            <p>
                {item.desc}
            </p>
        </div>
    )
}

export default Tier