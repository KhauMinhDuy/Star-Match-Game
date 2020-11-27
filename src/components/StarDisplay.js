import React, {Component} from 'react';

class StarDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div key={this.props.number} className='star'/>
            </div>
        );
    }
}

export default StarDisplay;