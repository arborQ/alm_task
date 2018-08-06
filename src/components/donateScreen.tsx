import { IDonation, loadDonateState } from "alm-services";
import * as React from "react";
import DonateComponent from "./donateComponent";

export class DonateScreen extends React.Component<{}, { loaded: boolean, donate: IDonation | null }> {
    componentDidMount(): void {
        loadDonateState().then((donate) => {
            this.setState(
                {
                    ...this.state,
                    ... { donate, loaded: true },
                },
            );
        });
    }

    render(): JSX.Element | null {
        if (this.state !== null && this.state.donate !== null) {
            return (
                <DonateComponent donate={this.state.donate} onChange={(donate) => {
                    this.setState(
                        {
                            ...this.state,
                            ... { donate },
                        },
                    );
                }} />
            );
        }

        return null; // or prepere loading screen
    }

}
