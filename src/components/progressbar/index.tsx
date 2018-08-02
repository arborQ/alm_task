import * as React from "react";

export default function ProgressBar(props: { value: number, maxValue: number }): JSX.Element {
    return (
        <div className="progress-bar">
            {`${props.value} / ${props.maxValue}`}
        </div>
    );
}