import React from "react";
class API extends React.Component {
state = {
  data: {

  }


}

handleFetch = async () => {
 
let bengal =`https://api.thecatapi.com/v1/images/search?breed_ids=beng`
let ragdoll = `https://api.thecatapi.com/v1/images/search?breed_ids=ragd`
let persian =`https://api.thecatapi.com/v1/images/search?breed_ids=pers`
let sphynx = `https://api.thecatapi.com/v1/images/search?breed_ids=sphy`

let cats = [bengal,ragdoll,sphynx,persian]
  const response = await fetch(cats[2]);
  const data = await response.json();
  console.log(data)
this.setState({data: {
  
id: data[0].id,
img:data[0].url,
name:data[0].breeds[0].name,
des:data[0].breeds[0].description

  }
  })


};
render() {
  return ( 
       <div className="api-inner-container">
         {/* <h2>{this.state.data.id}</h2> */}
     <h1 className="dataName">{this.state.data.name}</h1>
     <img  className="imageOfCat" src={this.state.data.img} alt=""/>
     <h2 className="des">{this.state.data.des}</h2>
     
     <button onClick={this.handleFetch}>choose a premium Cat</button>
    </div>
  );
}
};




export default API;