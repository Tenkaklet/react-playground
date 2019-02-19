import React from 'react';

class Counter extends React.Component {
    constructor (props) {
        console.log('props in constructor', props);
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClicked() {
        console.log('props in handleClick', this.props);
        console.log('state in handleClick', this.state);
        const newCount = this.state.count + 1;
        this.setState({
            count: newCount
        });
    }

    render() {
        return(
            <div>
                <p>The current count is: {this.state.count}</p>
                <button onClick={(count) => this.handleClicked()}>Add 1</button>
            </div>
        )
    }
}

export default Counter;