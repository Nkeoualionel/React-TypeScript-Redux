import * as React from "react"
import * as actionTypes from '../stores/actions/actionTypes'
import { useState } from "react"
import { render } from "@testing-library/react"


type Props = {
 
  saveArticle: (article: actionTypes.IArticle | any) => void
}


const AddArticle: React.FC<Props> = ({ saveArticle }) => { 

  const [article, setArticle] = useState<actionTypes.IArticle | {}>()


  const handleArticle = (e: React.FormEvent<HTMLInputElement>) => { 
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })

  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticle}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticle}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  )

}