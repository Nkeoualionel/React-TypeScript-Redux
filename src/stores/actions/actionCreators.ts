import { type } from 'os';
import React from 'react';
import * as actionTypes from './actionTypes'
import { IArticle, ArticleAction, DispatchType} from './actionTypes';




export function addArticle(article: IArticle) { 

  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}
 

export function deleteArticle(article: IArticle) {

  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}