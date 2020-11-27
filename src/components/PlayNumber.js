import React, {Component} from 'react';

class PlayNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <button style={{backgroundColor: colors[this.props.status]}}
                        onClick={() => this.props.onClick(this.props.number, this.props.status)} key={this.props.number}
                        className='number'>{this.props.number}</button>
            </div>
        );
    }
}

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

export default PlayNumber;