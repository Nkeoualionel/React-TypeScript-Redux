import { type } from 'os';
import React from 'react';


interface IArticle { 
  id: number
  title: string
  body: string
}
 
type ArticleState = {
  state: IArticle[]
}

type ArticleAction = {
  type: string
  article: IArticle
}

type DispatchType  = (args: ArticleAction) => ArticleAction