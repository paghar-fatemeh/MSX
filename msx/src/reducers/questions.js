import * as TYPES from "../actions/types";

const initialState = {
  List: [] 
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.DISPLAY_LIST:   {     
      return { ...state, List: [...action.payload] };
    }
   default:
      return state;
  }
};

export default question;
