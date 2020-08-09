import * as TYPES from "../actions/types";

const initialState = {
  List: [],
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.DISPLAY_LIST: {
      return { ...state, List: [...action.payload] };
    }
    case TYPES.UPDATE_VOTE_RESULT: {
      const clonedList = [...state.List];

      for (let i = 0; i < clonedList.length; i++) {
        for (let j = 0; j < clonedList[i].choices.length; j++) {
          if (action.payload.url === clonedList[i].choices[j].url) {
            clonedList[i].choices[j].votes = action.payload.votes;
          }
        }
      }

      return {
        ...state,
        List: [...clonedList],
      };
    }
    default:
      return state;
  }
};

export default question;
