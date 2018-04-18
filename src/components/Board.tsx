import * as React from 'react';
import { Square } from './Square';

interface Props {
    squares: string[],
    onClick: (i: number) => void
}

export class Board extends React.Component<Props, {}> {

    public handleClick = (i: number) => {
        this.props.onClick(i);
    };

    public renderSquare(i: number) {
        return (
            <Square
                value={ this.props.squares[i] }
                squareNumber={ i }
                onClick={ this.handleClick }
            />
        );
    }

    public render() {
        return (
            <div>
                <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }
}