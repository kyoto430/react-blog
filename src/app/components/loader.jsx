import React from 'react'

const Loader = () => {
  return (
    <div className="d-flex justify-content-center m-5">
      <div
        className="spinner-border"
        style={{ width: '5rem', height: '5rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loader
