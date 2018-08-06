import { donate, IDonation } from "alm-services";
import * as React from "react";

export default class Donate extends React.Component<{
    defaultValue: number,
    onChange: (newState: IDonation) => void,
}, {
        value: number,
    }> {

    state = { value: 0 };

    componentDidMount(): void {
        this.setState({
            ...this.state,
            ...{ value: this.props.defaultValue },
        });
    }

    render(): JSX.Element {
        return (
            <form className="donate__form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="layout layout--vertical layout--margin">
                    <input className="donate__input" type="number"
                        value={this.state.value}
                        onChange={(e) => this.changeValue(+e.target.value)} />
                    <button
                        type="input"
                        className="donate__button donate__button--success"
                        disabled={!this.canSubmit()}>Give Now</button>
                </div>
            </form>
        );
    }

    private canSubmit(): boolean {
        return (this.state.value > 0);
    }
    private changeValue(value: number): void {
        this.setState({
            ...this.state,
            ...{ value },
        });
    }

    private handleSubmit(event: React.FormEvent): void {
        event.stopPropagation();
        event.preventDefault();

        if (this.canSubmit()) {
            donate(this.state.value).then((newDonate) => {
                this.props.onChange(newDonate);

                this.changeValue(this.props.defaultValue);
            });
        }
    }
}
