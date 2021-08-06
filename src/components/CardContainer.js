import { FaRegFileCode } from "react-icons/fa";
import Card from "./Card";
// import './index.css';

function CardContainer ( {party, inv, select} ) {
    
    return (
        <div className="CardContainer">
            {party.map((item, index) => (
                <Card party={item} key={item.id} inv={inv} select={select}/>
                // console.log(item.imgSrc)
                
            ))}
        </div>
    )    
}



export default CardContainer;

