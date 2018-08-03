import * as React from "react";
import "./container";

export default function Container(props: React.Props<{}>): JSX.Element {
    return (
        <div className="donate__container">
            {props.children}
        </div>
    );
}
