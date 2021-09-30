import React from 'react'

const AddAdminPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 d-flex flex-column align-items-center">
        <h3>Добавление статьи</h3>
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Название"
            aria-label="Title"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Короткий текст"
            aria-label="ShortText"
          />
        </div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button>Опубликовать</button>
      </div>
    </div>
  )
}

export default AddAdminPage
