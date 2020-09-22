import * as actionTypes from "../actions/actionTypes";

const initState = {
  isEnglish: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        isEnglish: !state.isEnglish,
      };

    default:
      return state;
  }
};
