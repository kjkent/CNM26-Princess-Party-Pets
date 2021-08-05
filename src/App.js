import { useState } from "react"
import Checkout from "./components/Checkout"

const App = () => {
  const [inv, updateInv] = useState([
    {
      id: 1,
      title: "Basic Cat",
      desc: "An agitated mongrel cat found in the alleys behind Princess Party. Guaranteed* rabies free!",
      price: 20,
      isSelected: false
    },
    {
      id: 2,
      title: "+ Premium Cat Upgrade",
      desc: "A cat from our deluxe range, sporting long, extra-soft fur and a playful attitude",
      price: 15,
      isSelected: false
    },
    {
      id: 3,
      title: "+ Cat Wrangler",
      desc: "A trained human ",
      price: 40,
      isSelected: false
    }
  ])

  const select = (id) => {
    updateInv(inv.map((item) => item.id === id ? { ...item, isSelected: !item.isSelected} : item))
  }


  return (
    <Checkout inv={inv} select={select} />
  )
}

export default App;
