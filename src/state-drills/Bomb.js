import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
            
        }, 1000);
    }

    showBomb() {
        const { count } = this.state;
        if(count % 2 === 0) {
            return 'Tick';
        } else if (count >= 8) {
            clearInterval(this.interval);
            return 'BOOM!!!!';
        } else {
            return 'Tock';
        }
    }

    render() {
        return(
            <div>
                <p>{this.showBomb()}</p>
            </div>
        );
    }
}

export default Bomb;