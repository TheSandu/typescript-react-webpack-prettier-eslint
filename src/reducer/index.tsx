import {IEvents, IEventsResponse} from "../interfaces/events.interface";

export default function counterReducer(
    state: IEventsResponse = {value: 0},
    action: IEvents
): IEventsResponse {
    switch (action.type) {
        case "counter/incremented":
            return {value: state.value + 1};
        case "counter/decremented":
            return {value: state.value - 1};
        default:
            return state;
    }
}
