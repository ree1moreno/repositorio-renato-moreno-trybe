import { triviaApi, questionGame } from '../../api/service/index';

export const LOGIN_ACTION_CREATOR = 'LOGIN_ACTION_CREATOR';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const loginAction = (payload) => ({
  type: LOGIN_ACTION_CREATOR,
  payload,
});

export const requestQuestions = (payload) => ({
  type: REQUEST_QUESTIONS,
  payload,
});

export const updateScoreAction = (payload) => ({
  type: UPDATE_SCORE,
  payload,
});

export function tokenAction() {
  return async (dispatch) => {
    try {
      const response = await fetch(triviaApi);
      const { token } = await response.json();
      dispatch(loginAction({ token }));
    } catch (error) {
      console.error('Erro ao iniciar o jogo');
    }
  };
}

export function questionsAction(token) {
  return async (dispatch) => {
    try {
      console.log('iniciou request');
      const response = await fetch(questionGame(token));
      const { results } = await response.json();
      console.log('terminou request');
      dispatch(requestQuestions(results));
    } catch (error) {
      console.error('Erro ao iniciar o jogo!');
    }
  };
}
