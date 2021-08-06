import titleCat from '../images/catincircle.png';
import basketImg from '../images/basket.png';

function Title () {

    return (
        <div className="title-container">
            <img src={titleCat} />
            <div className="para-container">
                <h1 className="title-title">Party Princess Pet</h1>
                <p className="sub-title">Puuuuurfect For Your Party Needs!</p>
            </div>
            <div className="basket-img-container">
                <img src={basketImg} className="basket-img"/>
            </div>
        </div>
    )
}

export default Title;