export type Events = {
    type:'counter/incremented' | 'counter/decremented',
};

export type EventsResponse = {
    value: number,
};