// 前ページ、次ページを表示する
import * as React from 'react'
import { Link } from 'gatsby'
import { linkStyle, prevStyle, nextStyle } from './previousNext.module.css'

const PreviousNext = ({ previousNext }) => {
  console.log('previousPage:', previousNext.previous)
  console.log('currentPage:', previousNext.current)
  console.log('nextPage:', previousNext.next)
  return (
    <div>
      <hr/>
      <ul className={linkStyle}>
        <li className={prevStyle}>
          {previousNext.previous ? 
            <Link to={`${previousNext.previous.path}`}>
              ◀ Prev
            </Link>
            :
            <div></div>
          }
        </li>
        <li className={nextStyle}>
            {previousNext.next ? 
            <Link to={`${previousNext.next.path}`}>
              Next ▶
            </Link>
            :
            <div></div>
            }
        </li>
      </ul>
    </div>
  )
}

export default PreviousNext