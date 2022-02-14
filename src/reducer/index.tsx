import { Events, EventsResponse } from '../interfaces/events.interface'

export default function counterReducer(state: EventsResponse = { value: 0 }, action: Events): EventsResponse {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}