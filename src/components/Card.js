
import Checkout from './Checkout';
import CheckoutBackground from './CheckoutBackground';
import { useState } from 'react';

function Card ( { party } ) {

    const [ checkoutIsOpen, setCheckoutIsOpen ] = useState(false);

    function openHandler() {
        setCheckoutIsOpen(true)
        console.log(checkoutIsOpen)
        console.log('clicked open')
    }

    function closeHandler() {
        setCheckoutIsOpen(false)
        console.log(checkoutIsOpen)
        console.log('clicked close')
    }

    return (
        <div className="Card" onClick={openHandler}>
            
                <img src={party.imgSrc} alt={party.name} className="card-img"/>
                { checkoutIsOpen ? <Checkout party={party} /> : null}
                { checkoutIsOpen ? <CheckoutBackground close={closeHandler} /> : null}
        </div>
    )
}



export default Card;



// function Card ( { party } ) {
//     return (
//         <div className="Card" onClick={() => console.log('clicked')}>
            
//                 <img src={party.imgSrc} alt={party.name} className="card-img"/>
            
//         </div>
//     )
// }

