import girlWithStars from '../images/girlswithstars.png';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-para-container">
                <p className="hero-para">Give your Princess or Adventure Seeker a gift of a pet love ( for up to 4 hours) ! Take a look on our vast selection of characters and kittens below to start your magical experience ! </p>
            </div>
            <img src={girlWithStars} className="hero-img"/>
        </div>
    )
}

export default Hero;