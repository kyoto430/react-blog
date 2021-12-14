import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useHistory } from 'react-router'

const AddAdminPage = ({ onCreate }) => {
  const [post, setPost] = useState({
    title: '',
    shortText: '',
    fullText: '',
    image: '',
  })
  const history = useHistory()
  const handleAdd = (event) => {
    event.preventDefault()
    onCreate(post.title, post.shortText, post.fullText, post.image)
    history.replace('/controlAdmin')
    setPost('')
  }
  return (
    <form onSubmit={handleAdd}>
      <div className="container">
        <div className="wrapper">
          <h3>Добавление статьи</h3>
          <div className="mb-4 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Название"
              aria-label="Title"
              value={post.title}
              onChange={(event) =>
                setPost({ ...post, title: event.target.value })
              }
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Короткий текст"
              aria-label="ShortText"
              value={post.shortText}
              onChange={(event) =>
                setPost({ ...post, shortText: event.target.value })
              }
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Ссылка на изображение"
              aria-label="image"
              value={post.image}
              onChange={(event) =>
                setPost({ ...post, image: event.target.value })
              }
            />
          </div>
          <textarea
            className="form-control w-100 h-50"
            rows="10"
            value={post.fullText}
            onChange={(event) =>
              setPost({ ...post, fullText: event.target.value })
            }
            placeholder="Полный текст"
          ></textarea>
          <button type="submit" className="button mt-3">
            Опубликовать
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddAdminPage
