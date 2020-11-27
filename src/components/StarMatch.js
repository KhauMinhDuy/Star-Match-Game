import React, {Component} from 'react';
import PlayNumber from "./PlayNumber";
import StarDisplay from "./StarDisplay";

const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[utils.random(0, sums.length - 1)];
    },
};

class StarMatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stars: utils.random(1, 9),
            availableNums: utils.range(1, 9),
            candidateNums: [],
        };
    }

    render() {
        return (
            <div className="game">
                <div className="help">
                    Pick 1 or more numbers that sum to the number of stars
                </div>
                <div className="body">
                    <div className="left">
                        {utils.range(1, this.state.stars).map(number => <StarDisplay key={number} number={number}/>)}
                    </div>
                    <div className="right">
                        {utils.range(1, 9).map(number => <PlayNumber key={number} status={this.numberStatus(number)}
                                                                     number={number} onClick={this.onNumberClick}/>)}
                    </div>
                </div>
                <div className="timer">Time Remaining: 10</div>
            </div>
        );
    }

    numberStatus = (number) => {
        let candidatesAreWrong = utils.sum(this.state.candidateNums) > this.state.stars;
        if (!this.state.availableNums.includes(number)) {
            return 'used';
        }
        if (this.state.candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    };

    onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used') {
            return;
        }

        const newCandidateNums =
            currentStatus === 'available'
                ? this.state.candidateNums.concat(number)
                : this.state.candidateNums.filter(cn => cn !== number);

        if (utils.sum(newCandidateNums) !== this.state.stars) {
            this.setState({
                candidateNums: newCandidateNums
            });
        } else {
            const newAvailableNums = this.state.availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            this.setState({
                stars: utils.randomSumIn(newAvailableNums, 9),
                availableNums: newAvailableNums,
                candidateNums: []
            });
        }
    };
}




export default StarMatch;