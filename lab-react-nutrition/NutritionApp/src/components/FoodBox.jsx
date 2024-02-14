import { Component } from "react";

export default class FoodBox extends Component {

    constructor(foodItem) {
        super(foodItem)
        this.state = {
            filteredData: foodItem,
            clickCount: 0,
            calCount: 0,
        }
    }

    render() {

        let handleInput = (event)=>{
            this.setState({
                clickCount: event.target.value
            })
        }

        let handleButton = ()=>{
            this.setState({
                calCount: this.state.clickCount * this.state.filteredData.foodItem.cal
            })
        }

        let item = this.state.filteredData
        return (
            <>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.state.filteredData.foodItem.img} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{this.state.filteredData.foodItem.name}</strong> <br />
                                    <small>{this.state.filteredData.foodItem.cal} calories</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" onChange={handleInput} />
                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={handleButton}>
                                        +
                                    </button>
                                    <p>{this.state.clickCount}</p>
                                    <p>{this.state.calCount}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

            </>
        )
    }



}