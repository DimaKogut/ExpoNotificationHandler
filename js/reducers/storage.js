import { REHYDRATE } from 'redux-persist/constants'
import { RECIVE_DATA, UPDATE_SCORE, PASS_AGAIN } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  questionsList: [],
  quizStarted: false,
  questionIndex: 0,
  score: 0,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return(update(state, {
        questionIndex: { $set: 0 }
      })
    )
    break;
    case RECIVE_DATA:
      const { results } = action.data;

      return update(state, {
        questionsList: { $set: results },
        quizStarted: { $set: true }
      })
    break;
    case UPDATE_SCORE:
      const { score, questionIndex, set_answer } = action;

      return update(state, {
        score: { $set: score },
        questionIndex: { $set: questionIndex + 1 },
        questionsList: {
          [questionIndex]: {
            answer: { $set: set_answer }
          }
        }
      })

    break;
    case PASS_AGAIN:

      return update(state, {
        questionIndex: { $set: 0 },
        score: { $set: 0 },
        questionsList: { $set: [] },
        quizStarted: { $set: false }
      })

    break;
    default:
      return state;
  }
}