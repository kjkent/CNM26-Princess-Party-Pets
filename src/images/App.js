import { useState } from "react"
import Checkout from "./components/Checkout"
import Card from "./components/Card"
import CardContainer from "./components/CardContainer"
import './App.css';
import styled from 'styled-components';
import woody from './Images/Ellipse4.png';
import snowWhite from './Images/Ellipse1.png';
import jackJack from './Images/jj.png';
import aurora from './Images/Aurora.png';
// import basicCat from './Images/Ell2.png';
// import premiumCat from './Images/premiumcat.png';
// import pepe from './Images/pepe.png';

const App = () => {
  // const [inv, updateInv] = useState([
  //   {
  //     id: 1,
  //     title: "Basic Cat",
  //     desc: "An agitated mongrel cat found in the alleys behind Princess Party. Guaranteed* rabies free!",
  //     price: 20,
  //     isSelected: false
  //   },
  //   {
  //     id: 2,
  //     title: "+ Premium Cat Upgrade",
  //     desc: "A cat from our deluxe range, sporting long, extra-soft fur and a playful attitude",
  //     price: 15,
  //     isSelected: false
  //   },
  //   {
  //     id: 3,
  //     title: "+ Cat Wrangler",
  //     desc: "A trained human ",
  //     price: 40,
  //     isSelected: false
  //   }
  // ])

  

  const [party, setParty] = useState([
    {
      id: 1,
      name: "Woody",
      imgSrc: woody,
      checkoutText: "Woody has to go and save his friends agian...unfortunately he can't takie his cat with him ! Good news for you ! Woody's cat has some free space in his calendar just to pop in for your birthday party!",
      joke: "The question is... does he have a friend in you ?"
    },

    {
      id: 2,
      name: "Aurora",
      imgSrc: aurora,
      checkoutText: "If you want to party like a princess you need to get a princess pet !",
      joke: "Don't sleep on this one !"
    },

    {
      id: 3,
      name: "Jack Jack",
      imgSrc: jackJack,
      checkoutText: "For those who want everything at the same time! Get a cat that will be all you need!",
      joke: "Make your party INCREDIBLE !!!!"
    },

    {
      id: 4,
      name: "Snow White",
      imgSrc: snowWhite,
      checkoutText: "Snow White's cat is getting bored in the forest, show him a good time! Mirror, mirror on the wall who's the coolest of them all ? ",
      joke: "You ! with our cool cat !  "
    }


  ])

  // const select = (id) => {
  //   updateInv(inv.map((item) => item.id === id ? { ...item, isSelected: !item.isSelected} : item))
  // }


  return (
    <Wrapper>
      <CardContainer party={party}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 2px solid orange;
`



export default App;
{/* <Checkout inv={inv} select={select} /> */}