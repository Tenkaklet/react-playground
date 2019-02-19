import React from 'react';

class TheDate extends React.Component {

    constructor (props) {
        super(props);
        this.state = { datetime: new Date() };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('ComponentDidMount');
        this.interval  = setInterval(() => {
            this.setState({
                datetime: new Date()
            })
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div>
                {this.state.datetime.toLocaleDateString()}
            </div>
        )
    }
}

export default TheDate;