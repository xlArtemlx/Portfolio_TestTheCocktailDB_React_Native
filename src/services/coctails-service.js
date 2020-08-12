import React, {useReducer} from 'react';
import {Context} from './context';
import {ActionReducer} from './reducer';
import axios from 'axios';
import { GET_CATEGORY, GET_COCKTAILS, NEW_CATEGORYES, SELECTED_CATEGORY} from './actions';

export const CocktailService = ({children}) => {



  const initialState = {
    strCategory: [],
    selectedCategory: [],
    checkIt: [],
    drinks: []
  };

  
  const [state, dispatch] = useReducer(ActionReducer, initialState);


  const getStrCategory = async () => {
    await axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(results => {

        dispatch({
          type: GET_CATEGORY,
          payload: results.data.drinks
        });
      });
  };


  const getCocktails = page => {
    let data = [];
    page.map(async url => {
      await axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${url}`)
        .then(results => {
          let strCat = {
            url,
            drinks: results.data.drinks
          };
          data.push(strCat);

          dispatch({
            type: GET_COCKTAILS,
            payload: data
          });
        });
    });
  };


  const addStrCategory = item => {
    checkIt.push(item);

    dispatch({
      type: NEW_CATEGORYES,
      payload: checkIt
    });
  };


  const appCategory = strCat => {

    dispatch({
      type: SELECTED_CATEGORY,
      payload: strCat
    });
  };


  const changeStrCategory = items => {
    const k = checkIt.findIndex(n => n === items);
    if (k !== -1) {
      checkIt.splice(k, 1);
    }
  };

 


  const {strCategory, checkIt, selectedCategory, drinks} = state;


  return (
    <Context.Provider
      value={{
        strCategory,
        checkIt,
        selectedCategory,
        drinks,
        getStrCategory,
        addStrCategory,
        changeStrCategory,
        getCocktails,
        appCategory
      }}>
      {children}
    </Context.Provider>
  );
};