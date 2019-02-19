import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }

  componentWillMount() {
    clearTimeout(this.timout);
  }

  RouletteGunAction() {
    this.setState({
      spinningTheChamber: true
    });
    this.timout = setTimeout(() => {
      const random = Math.ceil(Math.random() * 8);
      this.setState({
          chamber: random,
          spinningTheChamber: false
      });
    }, 2000);
  }

  showAction() {
    const { chamber, spinningTheChamber } = this.state;
    if(spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger! ...';
    } else if (chamber === this.props.bulletInChamber) {
        return 'BANG!';
    } else {
        return 'You are safe';
    }
  }

  render() {
    return (
      <div>
        <p>{this.showAction()}</p>
        <button onClick={() => this.RouletteGunAction()}>
          Pull the Trigger
        </button>
      </div>
    );
  }
}

export default RouletteGun;
