import React, {Component} from 'react';

class PlayAgain extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="game-done">
                <button onClick={this.props.onClick}>Play Again</button>
            </div>
        );
    }
}

export default PlayAgain;