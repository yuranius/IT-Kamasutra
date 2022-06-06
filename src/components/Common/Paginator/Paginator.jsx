import React from 'react'
import scss from './Paginator.module.scss'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index)
  }

  return (
    <>
      {pages.map((p) => {
		  
        return (
			
          <span
            key={p}
            onClick={() => {
              onPageChanged(p)
            }}
            className={
              currentPage === p
                ? scss['namber-page__page-active']
                : scss['namber-page__page']
            }
          >
            {p}
          </span>
        )
      })}
    </>
  )
}

export default Paginator
