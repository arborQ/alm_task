import * as React from "react";

export default function Container(props: React.Props<{}>): JSX.Element {
    return (
        <div className="donate__container">
            {props.children}
        </div>
    );
}
