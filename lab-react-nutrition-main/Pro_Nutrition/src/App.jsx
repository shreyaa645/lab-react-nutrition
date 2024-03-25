import React from "react";
import FoodBox from "./Component/FoodBox";
import FoodData from "./resources/FoodData"

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      value : "",
      newArr : FoodData
    }

  }
  render(){
    let {value,newArr} = this.state

    let handleChange = (event)=>{

      let filteredData = FoodData.filter((el,i)=>el.name.includes(event.target.value)) 
      this.setState({newArr:filteredData})
    }
    return(
      <>
      <div>
    <div>
      <input className="foodSearch" type="text" placeholder="Search Food here" onChange={handleChange} />
    </div>

        {newArr.map((el,i)=>(
          <FoodBox key={i} {...el}/>
        ))}
      </div>
      </>
    )
  }
}