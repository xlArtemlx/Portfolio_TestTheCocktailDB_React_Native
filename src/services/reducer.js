import {NEW_CATEGORYES, SELECTED_CATEGORY, GET_CATEGORY, GET_COCKTAILS} from './actions';

const handlers = {
  [GET_CATEGORY]: (state, {payload}) => ({...state, strCategory: payload}),
  [GET_COCKTAILS]: (state, {payload}) => ({...state, drinks: payload}),
  [NEW_CATEGORYES]: (state, {payload}) => ({...state, checkIt: payload}),
  [SELECTED_CATEGORY]: (state, {payload}) => ({...state, selectedCategory: payload}),
  DEFAULT: state => state,
};

export const ActionReducer = (state, action) => {
  
  const handler = handlers[action.type] 
                ||
                  handlers.DEFAULT;

  return handler(state, action);

};