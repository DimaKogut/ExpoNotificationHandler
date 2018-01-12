import { REHYDRATE } from 'redux-persist/constants'
import { RECIVE_DATA, UPDATE_SCORE, PASS_AGAIN, FINISHED_QUIZ } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  questionsList: [],
  quizStarted: false,
  showResult: false,
  questionIndex: 0,
  score: 0,
  storageLoaded: false
}

export default function(state = initialState, action) {
  switch (action.type) {
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
        quizStarted: { $set: false },
        showResult: { $set: false }
      })

    break;
    case FINISHED_QUIZ:

      return update(state, {
        showResult: { $set: true }
      })

    break;
    default:
      return state;
  }
}