import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useHistory } from 'react-router'

const AddAdminPage = ({ onCreate }) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const history = useHistory()
  const handleAdd = (event) => {
    event.preventDefault()
    onCreate(value1, value2, value3)
    history.replace('/login/controlAdmin')
    setValue1('')
    setValue2('')
    setValue3('')
  }
  return (
    <form onSubmit={handleAdd}>
      <div className="d-flex justify-content-center">
        <div className="w-50 d-flex flex-column align-items-center">
          <h3>Добавление статьи</h3>
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Название"
              aria-label="Title"
              value={value1}
              onChange={(event) => setValue1(event.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Короткий текст"
              aria-label="ShortText"
              value={value2}
              onChange={(event) => setValue2(event.target.value)}
            />
          </div>
          <textarea
            className="form-control"
            rows="3"
            value={value3}
            onChange={(event) => setValue3(event.target.value)}
          ></textarea>
          <button type="submit">Опубликовать</button>
        </div>
      </div>
    </form>
  )
}

export default AddAdminPage
