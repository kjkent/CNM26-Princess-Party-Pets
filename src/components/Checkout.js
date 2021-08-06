import { useState } from "react"
import Tiers from "./Tiers"
import Basket from "./Basket"
import Total from "./Total"
import CheckoutButton from "./CheckoutButton"
import basicCat from '../images/Ell2.png';
import premiumCat from '../images/premiumcat.png';
import pepe from '../images/pepe.png';
import API from "./API.js"

const Checkout = ({ party }) => {
    const [inv, updateInv] = useState([
        {
          id: 1,
          title: "Basic Cat",
          desc: "Mangy Phil: An agitated mongrel cat found in the alley behind Princess Party Pets.",
          price: 20,
          isSelected: true,
          image: basicCat
        },
        {
          id: 2,
          title: "+ Premium Cat Upgrade",
          desc: "A cat from our deluxe range, sporting long, extra-soft fur and a playful attitude",
          price: 15,
          isSelected: false,
          image: premiumCat
        },
        {
          id: 3,
          title: "+ Cat Wrangler",
          desc: "Who better to show off your new furry friend than one of our trained animal handlers?",
          price: 40,
          isSelected: false,
          image: pepe
        },
    ]);
    
    const [basket, updateBasket] = useState([]);
    const [total, updateTotal] = useState(0);
    
    const select = (selectedItem) => {
        updateInv(
          inv.map((item) =>
            item.id === selectedItem.id
              ? { ...item, isSelected: !item.isSelected }
              : item
          )
        );
    
        updateBasket([...basket, selectedItem]);
        updateTotal(total + selectedItem.price)
    };

    return (
        <div className="wrapper-checkout">   
            <div className="checkout-top">
                <img src={party.imgSrc} className="checkout-image" alt="" />
                <div className="checkout-party-text-container">
                    <p className="checkout-party-para">{party.checkoutText}</p>
                    <p className="checkout-joke">{party.joke}</p>
                </div>
            </div>
            <div className="checkout-bottom">
                <Tiers inv={inv} select={select} party={party}/>
                <div className="container-api">
                    <API />
                    <div className="container-image-api">
                        <img src="#" alt="" />
                    </div>
                </div>
                <div className="basket-holder">
                    <Basket basket={basket}/>
                    <Total total={total} />
                    <CheckoutButton />
                </div>  
            </div>
        </div>
    )
}

export default Checkout