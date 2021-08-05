import Tier from "./Tier"

const Tiers = ({ inv, select }) => {
    return (
        <div>
            {inv.map((item) => (
                <Tier key={item.id} item={item} select={select} />
            ))}
        </div>
    )
}

export default Tiers