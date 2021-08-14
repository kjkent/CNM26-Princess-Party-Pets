
import pineapple from '../images/pineaple.png';

function ThankYou() {
    return (
        <div className="thankyou-wrapper">
            <div className="thankyou-top thanks">
                <div className="top-para-container">
                    <p className="para-text">Thank you for your order of: </p>
                    <p className="para-item">a cat</p>
                </div>
            </div>
            <div className="thankyou-middle thanks">
                <img src={pineapple} className="pineapple"/>
                <div className="container-middle-para">
                    <p className="middle-para">Thank you for shopping in Part Princess Pet !</p>
                    <button className="middle-button">Home</button>
                </div>
            </div>
            <div className="thankyou-bottom thanks">
            
            </div>
        </div>
    )
}

export default ThankYou;