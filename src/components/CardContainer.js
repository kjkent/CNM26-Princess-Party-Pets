import Card from "./Card";
// import './index.css';

function CardContainer ( { party } ) {
    
    return (
        <div className="CardContainer">
            {party.map((item, index) => (
                <Card party={item} key={item.id} />
                // console.log(item.imgSrc)
                
            ))}
        </div>
    )    
}



export default CardContainer;

