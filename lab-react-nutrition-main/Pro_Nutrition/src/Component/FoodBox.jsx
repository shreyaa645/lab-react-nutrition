import React from "react";
import "./FoodBox.css"
// import FoodData from "../resources/FoodData";

export default class FoodBox extends React.Component {
    constructor(){
        super();
        this.state = {
            CountNo : 0,
            countCal : 0
        }
    }
  render() {
    let {CountNo,countCal} = this.state
    

    let HandleQuantity=(event)=>{
        console.log(event.target.value)
        this.setState({CountNo: event.target.value}) 
        console.log(CountNo)
    }

    let HandleCal = ()=>{
        this.setState({countCal:this.props.cal*CountNo})
    }

    let handleReset =()=>{
        this.setState({CountNo:0})
        this.setState({countCal:0})
    }
    return (
      <>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.img} width="120px" />
              </figure>
            </div>

            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.cal}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={CountNo} placeholder="Enter the number" onChange={HandleQuantity}/>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={HandleCal}>+</button>
                </div>
              </div>
            </div>
          </article>

          <div>
            <h2>
                {CountNo} {this.props.name} = {countCal} Calories
            </h2>
          </div>
          <div>
            <button className="resetBtn" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </>
    );
  }
}
