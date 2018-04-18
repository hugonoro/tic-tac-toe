import * as React from 'react';

interface Props {
    onClick: (step: number) => void,
    stepNumber: number,
    description: string
}

export class HistoryItem extends React.Component<Props, {}> {
    public handleClick = () => {
        this.props.onClick(this.props.stepNumber);
    };

    public render() {
        return (
            <li>
                <button onClick={ this.handleClick }>{ this.props.description }</button>
            </li>
        );
    }
}