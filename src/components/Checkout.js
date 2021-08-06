import Tiers from "./Tiers"
import Total from "./Total"
import CheckoutButton from "./CheckoutButton"

const Checkout = ({ inv, total, select }) => {
    return (
        <div>   
            <Tiers inv={inv} select={select} />
            <Total total={total} />
            <CheckoutButton />
        </div>
    )
}

export default Checkout