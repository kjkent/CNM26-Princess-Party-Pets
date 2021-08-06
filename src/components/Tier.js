import { FaShoppingBasket } from "react-icons/fa"

const Tier = ({ item, select }) => {
    return (
        <div className="tier-container">
            
                <div className="tier-title-container" onClick={() => select(item)}>
                    <p className="tier-para">
                        {item.title} - £{item.price} <FaShoppingBasket style={{ cursor: "pointer" }} onClick={() => select(item)} />
                    </p>
                    <img src={item.image} className="tier-cat-image" alt="" />
                </div>
                <p className="tier-para">
                    {item.desc}
                </p>
            
        </div>
    )
}

export default Tier