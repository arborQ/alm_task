export interface IDonation {
    currentValue: number;
    daysLeft: number;
    defaultDonation: number;
    donors: number;
    goal: number;
}

let donateFakeServerState: IDonation = {
    currentValue: 123,
    daysLeft: 3,
    defaultDonation: 50,
    donors: 42,
    goal: 500,
};

export function loadDonateState(): Promise<IDonation> {
    return Promise.resolve(donateFakeServerState);
}

export function donate(value: number): Promise<IDonation> {
    donateFakeServerState = {
        ...donateFakeServerState,
        ... {
            currentValue: donateFakeServerState.currentValue + value,
            donors: donateFakeServerState.donors + 1,
        },
    };

    return loadDonateState();
}
