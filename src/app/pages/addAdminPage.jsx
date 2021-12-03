import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useHistory } from 'react-router'

const AddAdminPage = ({ onCreate }) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const history = useHistory()
  const handleAdd = (event) => {
    event.preventDefault()
    onCreate(value1, value2, value3, value4)
    history.replace('/login/controlAdmin')
    setValue1('')
    setValue2('')
    setValue3('')
    setValue4('')
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
              value={value1}
              onChange={(event) => setValue1(event.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Короткий текст"
              aria-label="ShortText"
              value={value2}
              onChange={(event) => setValue2(event.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Ссылка на изображение"
              aria-label="image"
              value={value4}
              onChange={(event) => setValue4(event.target.value)}
            />
          </div>
          <textarea
            className="form-control w-100 h-50"
            rows="10"
            value={value3}
            onChange={(event) => setValue3(event.target.value)}
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
