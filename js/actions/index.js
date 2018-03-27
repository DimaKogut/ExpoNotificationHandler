import * as Actions from './actionTypes';
import projectsApi from '../api';

export function fetchData() {
  return (dispatch, getState) => {

    return projectsApi.fetchData()
      .then(resp => {
        dispatch(receiveData(resp))
      })

      .catch(error => {
        console.log(error)
      })
  }
}

function receiveData(data) {
  return {
    type: Actions.RECIVE_DATA,
    data
  }
}

export function setAnswer(data) {
  return (dispatch, getState) => {

    const { storage } = getState();
    const { questionsList } = storage
    let { score } = storage
    let set_answer = false
    const { answer, questionIndex } = data

    if(questionsList[questionIndex].correct_answer === answer){
      score += 1
      set_answer = true
    }
    dispatch(updateScore(score, questionIndex, set_answer))

  }


}

function updateScore(score, questionIndex, set_answer) {
  return {
    type: Actions.UPDATE_SCORE,
    score,
    questionIndex,
    set_answer
  }
}

export function passAgain(data) {
  return {
    type: Actions.PASS_AGAIN
  }
}

export function finishedQuiz() {
  return {
    type: Actions.FINISHED_QUIZ
  }
}


export function receivedToken(data) {

  return {
    type: Actions.RECIVED_TOKEN,
    data
  }

}