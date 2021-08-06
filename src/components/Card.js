
import Checkout from './Checkout';
import CheckoutBackground from './CheckoutBackground';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';

function Card ( { party, inv, select  } ) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="Card" onClick={onOpenModal}>
            
                <img src={party.imgSrc} alt={party.name} className="card-img"/>
                <Modal open={open} onClose={onCloseModal} center>
                    <Checkout party={party} inv={inv} select={select} onClose={onCloseModal}/>
                    <CheckoutBackground />  
                </Modal>
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

