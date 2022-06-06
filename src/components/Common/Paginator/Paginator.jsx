import React from 'react'
import scss from './Paginator.module.scss'

let Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

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
              props.onPageChanged(p)
            }}
            className={
              props.currentPage === p
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
