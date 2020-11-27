import React, {Component} from 'react';

class PlayNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <button key={this.props.number} className='number'>{this.props.number}</button>
            </div>
        );
    }
}

export default PlayNumber;