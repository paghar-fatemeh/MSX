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

