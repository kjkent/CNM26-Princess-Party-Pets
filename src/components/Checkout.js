import Tiers from "./Tiers"

const Checkout = ({ inv, select }) => {
    return (
        <div>   
            <Tiers inv={inv} select={select} />
        </div>
    )
}

export default Checkout