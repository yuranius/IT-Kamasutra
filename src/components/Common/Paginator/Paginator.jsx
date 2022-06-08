import React, { useState } from 'react'
import scss from './Paginator.module.scss'

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  //? определяем границы для диапазона вывода страниц------------>

  //? определяем размер порции:
  let portionCount = Math.ceil(totalItemsCount / portionSize) //? portionSize - размер порции
  let [portionNamber, setPortionNamber] = useState(1);
  
  let leftPortionPageNamber = (portionNamber - 1) * portionSize + 1; //* левая граница
  let rightPortionPageNamber = portionNamber * portionSize; //* правая граница

  //? --------------------> определяем границы для диапазона вывода страниц

  let pages = []

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index)
  }

  return (
    <>
    {portionNamber > 1 && <button onClick={ ()=> { setPortionNamber(portionNamber - 1) } }>PREV</button>}
      

      {pages
      .filter( (p) => p >= leftPortionPageNamber && p <= rightPortionPageNamber)
      .map((p) => {
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
      })
      }
      {portionNamber < portionCount && <button onClick={ ()=> { setPortionNamber(portionNamber + 1) } }>NEXT</button>}
    </>
  )
}

export default Paginator
