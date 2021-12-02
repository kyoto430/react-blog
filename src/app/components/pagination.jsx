import React from 'react'
import { pagesArray } from '../utils/methods'

const Pagination = ({ articlesCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(articlesCount / pageSize)
  if (pageCount === 1) return null
  console.log({ currentPage })
  console.log('pages', pageCount)
  const arrayPages = pagesArray(pageCount)
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination cursor">
        {arrayPages.map((page) => (
          <li
            key={page}
            className={'page-item ' + (page === currentPage ? 'active' : '')}
          >
            <a
              className="page-link bg-white text-dark m-1"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
