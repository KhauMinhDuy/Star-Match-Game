import React, {Component} from 'react';

class StarDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {utils.range(1, this.props.count).map(starId => (
                    <div key={starId} className="star"/>
                ))}
            </div>
        );
    }
}

const utils = {
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),
};

export default StarDisplay;