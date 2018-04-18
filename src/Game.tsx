import * as React from 'react';
import { Board } from './components/Board';
import { HistoryItem } from './components/HistoryItem';
import { calculateWinner } from './utils';

interface State {
    history: Array<{ squares: string[] }>,
    stepNumber: number,
    xIsNext: boolean
}

export class Game extends React.Component<{}, State> {

    public state: State;

    constructor(props: any) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    public handleClick = (i: number) => {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    };

    public jumpTo = (step: number) => {
        this.setState({
            stepNumber: step,
            xIsNext: ( step % 2 ) === 0,
        });
    };

    public render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step: any, move: any) => {
            const description = move
                ? 'Go to move #' + move
                : 'Go to game start';
            return (
                <HistoryItem key={ move } onClick={ this.jumpTo } stepNumber={ move } description={ description }/>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' );
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={ current.squares }
                        onClick={ this.handleClick }
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
        );
    }
}