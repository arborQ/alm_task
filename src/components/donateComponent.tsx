import { IDonation, remember } from "alm-services";
import * as React from "react";
import Donate from "./donateForm";
import ProgressBar from "./progressbar";

function donateMessageLink(d: IDonation): string {
    const message = `Only ${d.daysLeft} days left`;

    return `mailto:?subject=${message}&body=${message}`;
}

export default function donateComponent(props: {
    donate: IDonation,
    onChange: (newState: IDonation) => void,
}): JSX.Element {
    const { donate } = props;

    return (
        <div className="donate">
            <div className={
                [
                    "donate__container",
                    "donate__container--dark",
                    "donate__container--rounded",
                    "donate__container--tooltip",
                ].join(" ")
            }>
                <div className="donate__container--text">
                    {
                        donate.currentValue < donate.goal
                            ? `${donate.goal - donate.currentValue}$ still need for this project`
                            : "The goal has been achieved but we continue to accept contributions."
                    }
                </div>
            </div>
            <div className="donate__container">
                <ProgressBar value={donate.currentValue} maxValue={donate.goal} />
                <div className="donate__container--text">
                    <span className="donate__container--text--highlighted">
                        {`Only ${donate.daysLeft} days left`}</span> to fund this project.
                    </div>
                <div className="donate__container--text hidden--mobile">
                    <span>Join the </span>
                    <span className="donate__container--text--bold">{donate.donors}</span>
                    <span> other donors who have already supported this project. Every dollar helps.</span>
                </div>
                <Donate defaultValue={donate.defaultDonation} onChange={props.onChange} />
                <div className="donate__container--text">
                    <span className="donate__container--text--info">Why give {donate.defaultDonation}$?</span>
                </div>
            </div>
            <div className="donate__container donate__container--light">
                <div className="layout layout--vertical layout--margin">
                    <button type="button" className="donate__button donate__button--default"
                        onClick={() => {
                            remember("donate_form", donate);
                        }}>Save for later</button>
                    <a className="donate__button donate__button--default" href={donateMessageLink(donate)}>
                        Tell a friend
                        </a>
                </div>
            </div>
        </div>
    );
}
