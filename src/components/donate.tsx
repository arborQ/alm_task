import * as React from "react";

export default class Donate extends React.Component<{ defaultValue: number }, {}> {
    render(): JSX.Element {
        return (
            <form className="donate__form" onSubmit={(e) => { alert('donate'); e.stopPropagation(); e.preventDefault();  }}>
                <input className="donate__form--input" type="number" />
                <button type="input" className="donate__form--button">Give Now</button>
            </form>
        );
    }
}
