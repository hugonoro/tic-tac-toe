import * as React from 'react';

interface Props {
    onClick: (i: number) => void,
    squareNumber: number,
    value: string
}

export class Square extends React.Component<Props, {}> {
    public handleClick = () => {
        this.props.onClick(this.props.squareNumber);
    };

    public render() {
        return (
            <button className="square" onClick={ this.handleClick }>
                { this.props.value }
            </button>
        );
    }
}