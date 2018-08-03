import * as React from "react";

export default function ProgressBar(props: { value: number, maxValue: number }): JSX.Element {
    const percentageValue = props.value <= 0
        ? 0
        : props.maxValue <= 0
            ? 100
            : (props.value / props.maxValue) * 100;

    return (
        <div className="donate__progress">
            <div className="donate__progress__bar" style={{ width: `${Math.min(percentageValue, 100)}%` }}></div>
        </div>
    );
}
