import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import * as actionTypes from "../stores/actions/actionTypes"

type Props = {
  article: actionTypes.IArticle
  removeArticle: (article: actionTypes.IArticle) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteArticle = React.useCallback(
    (article: actionTypes.IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  )

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  )
}