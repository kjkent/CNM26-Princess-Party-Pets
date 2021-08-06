import { useState } from "react"
import Checkout from "./components/Checkout"

const App = () => {
  const [inv, updateInv] = useState([
    {
      id: 1,
      title: "Basic Cat",
      desc: "Mangy Phil: An agitated mongrel cat found in the alley behind Princess Party Pets. Guaranteed* rabies free!",
      price: 20,
      isSelected: true,
    },
    {
      id: 2,
      title: "+ Premium Cat Upgrade",
      desc: "A cat from our deluxe range, sporting long, extra-soft fur and a playful attitude",
      price: 15,
      isSelected: false,
    },
    {
      id: 3,
      title: "+ Cat Wrangler",
      desc: "Who better to show off your new furry friend than one of our trained animal handlers?",
      price: 40,
      isSelected: false,
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

  // What does useState return? It returns a pair of values: the current state and a function that updates it. 
  // This is why we write const [count, setCount] = useState(). 
  // This is similar to this.state.count and this.setState in a class, except you get them in a pair.

  return <Checkout inv={inv} total={total} select={select} />;
}

export default App;
