import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexOfAccordion: 0
        }
    }

    handlebuttonClick = (index) => {
        this.setState({
            indexOfAccordion: index
        }); 
    }

    renderParagraph() {
        const currentIndex = this.props.sections[this.state.indexOfAccordion];
        return (
            <p>{currentIndex.content}</p>
        )
    }

    renderButtons() {
        return this.props.sections.map((title, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handlebuttonClick(index)}>{title.title}</button>
            </li>
        ));
    }


    render() {
        return(
            <div>
                <ul>
                    { this.renderButtons() }
                    <p>{this.renderParagraph()}</p>
                </ul>
            </div>
        );
    }
}

export default Accordion;