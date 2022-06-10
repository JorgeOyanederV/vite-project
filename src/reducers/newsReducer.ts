import { types } from "../types/types";

const initialState = {
  news: [],
  faves: JSON.parse(localStorage.getItem('faves')) || [],
  selectedNews: localStorage.getItem('active') || 'all',
  sourceNews: localStorage.getItem('source') || ''
};

interface newsReducerProps {
}

export const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.setNews:
      return {
        ...state,
        news: action.payload
      }
    case types.setActiveNews:
      return {
        ...state,
        selectedNews: action.payload
      }
    case types.setSourceNews:
      return {
        ...state,
        sourceNews: action.payload
      }
    case types.addNewFave:
      return {
        ...state,
        faves: [action.payload, ...state.faves]
      }
    case types.removeNewFave:
      return {
        ...state,
        faves: action.payload
      }
    default:
      return state;
  }
};
