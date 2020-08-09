import * as TYPES from "../actions/types";
import tmdbAPI from "../api/tmdb";

export const getQuestionsList = () => async (dispatch) => {
  let url = "/questions";
  const res = await tmdbAPI.get(url);
  dispatch({
    type: TYPES.DISPLAY_LIST,
    payload: res.data,
  }); 
};

export const setChangeVote = url => async (dispatch) => {
  const res = await tmdbAPI.post(url);
  dispatch({
    type: TYPES.UPDATE_VOTE_RESULT,
    payload: {
      url,
      votes: res.data.votes
    }
  })
};
