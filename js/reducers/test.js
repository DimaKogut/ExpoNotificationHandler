import { ActionConst } from 'react-native-router-flux';

const initialState = {
    step: null
};

export default function routes(state = initialState, action = {}) {
    switch (action.type) {
      default:
        return state;
    }
}