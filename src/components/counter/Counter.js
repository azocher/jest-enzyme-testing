import React, { Component } from 'react'

class Counter extends Component {
    state = {
        number: 0
    }

    add = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    minus = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Counter
                </h1>
                <h3 className="number">
                    {this.state.number}
                </h3>
                <button className="plus" onClick={this.add}>+</button>
                <button className="minus" onClick={this.minus}>-</button>
                <h4>👋 Goodbye!!</h4>
            </div>
        )
    }
}

export default Counter