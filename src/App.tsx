import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./index.css"
import * as actionTypes from "./stores/actions/actionTypes"
import { Article } from "./components/Article"
import  AddArticle  from "./components/AddArticle"
import { addArticle, removeArticle } from "./stores/actions/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const articles: readonly actionTypes.IArticle[] = useSelector(
    (state: actionTypes.ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: actionTypes.IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: actionTypes.IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  )
}

export default App