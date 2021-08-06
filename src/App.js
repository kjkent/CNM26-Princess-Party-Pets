import { useState } from "react"
import CardContainer from "./components/CardContainer"
import styled from 'styled-components';
import woody from './images/Ellipse4.png';
import snowWhite from './images/Ellipse1.png';
import jackJack from './images/jj.png';
import aurora from './images/Aurora.png';

const App = () => {
  // eslint-disable-next-line
  const [party, setParty] = useState([
    {
      id: 1,
      name: "Woody",
      imgSrc: woody,
      checkoutText: "Woody has to go and save his friends agian...unfortunately he can't takie his cat with him ! Good news for you ! Woody's cat has some free space in his calendar just to pop in for your birthday party!",
      joke: "The question is... does he have a friend in you ?",
      data: {}
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

  return (
    <div>
      <Wrapper>
        <CardContainer party={party}/>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 2px solid orange;
`

export default App;
