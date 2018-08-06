import * as React from "react";

export default class Donate extends React.Component<{ defaultValue: number }, {}> {
    render(): JSX.Element {
        return (
            <form className="donate__form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="layout layout--vertical layout--margin">
                    <input className="donate__input" type="number" />
                    <button type="input" className="donate__button donate__button--success">Give Now</button>
                </div>
            </form>
        );
    }

    private handleSubmit(event: React.FormEvent): void {
        alert("donate");
        event.stopPropagation();
        event.preventDefault();
    }
}
