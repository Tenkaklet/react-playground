import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            who: 'World'
        }
    }

    friendBtn() {
        this.setState({
            who: 'Friend'
        });
    }

    worldBtn() {
        this.setState({
            who: 'World'
        });
    }

    reactBtn() {
        this.setState({
            who: 'React'
        });
    }


    render() {
        return(
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={() => this.friendBtn()}>Friend</button>
                <button onClick={() => this.worldBtn()}>World</button>
                <button onClick={() => this.reactBtn()}>React</button>
            </div>
        );
    }
}

export default HelloWorld;