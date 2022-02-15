export type IEvents = {
    type: "counter/incremented" | "counter/decremented";
};

export type IEventsResponse = {
    value: number;
};
