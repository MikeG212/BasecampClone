import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT,
} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, {[action.event.id]: action.event});
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    case REMOVE_EVENT:
      let newState = merge({}, state);
      delete newState[action.eventId]
      return newState;
    default:
      return state;

  }

};

export default eventsReducer;
