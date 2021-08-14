
import Checkout from './Checkout';
import CheckoutBackground from './CheckoutBackground';
import { useState } from 'react';
// import { Modal } from 'react-responsive-modal';
// import { Modal, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

function Card ( { party, inv, select  } ) {

    // const [show, setShow] = useState(false);
    // const [open, setOpen] = useState(true);

    // const handleShow = () => setShow(true);
    // const onCloseModal = () => setOpen(false);

    // return (
    //     <div className="Card" variant="primary" onClick={handleShow}>
            
    //             <img src={party.imgSrc} alt={party.name} className="card-img"/>
    //             <Modal show={show}>
    //                 <Checkout party={party} inv={inv} select={select} />
    //                 <CheckoutBackground  open={open} onClose={onCloseModal}/>  
    //             </Modal>
    //     </div>
    // )

    const [ modalIsOpen, setModalIsOpen ] =useState(false);

    function openHandler() {
        setModalIsOpen(true)
    }

    function closeHandler() {
        setModalIsOpen(false)
        console.log('i have been clicked')
    }

    return (
        <div className="Card" >
            <img src={party.imgSrc} alt={party.name} className="card-img" onClick={openHandler}/>
            { modalIsOpen ? <Checkout party={party}/> : null}
            { modalIsOpen ? <CheckoutBackground onClick={closeHandler} /> : null}
        </div>
    )
}



export default Card;

{/* <div className='container--flex container__middle--small'>
<div className="container--flex container__middle--img">
    <img src={props.name} alt="" />
</div>
<button className="btn--img" onClick={openHandler}>Click</button>
{ modalIsOpen ? <Modal text={text}/> : null}
{ modalIsOpen ? <Background onClick={closeHandler}/> : null}
</div>  */}



// function Card ( { party } ) {
//     return (
//         <div className="Card" onClick={() => console.log('clicked')}>
            
//                 <img src={party.imgSrc} alt={party.name} className="card-img"/>
            
//         </div>
//     )
// }

