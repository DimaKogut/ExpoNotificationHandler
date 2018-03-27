import { REHYDRATE } from 'redux-persist/constants'
import { RECIVED_TOKEN } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  token: false,
  id: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE: {
      let storage = state
      if(action.payload.storage) storage = action.payload.tokens

      return {
        ...storage
      }
    }
    break;
    case RECIVED_TOKEN:
      const { data } = action;
      const { push_token, _id } = data;

      return update(state, {
        token: { $set: push_token },
        id: { $set: _id },
      })

    break;
    default:
      return state;
  }
}