import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { linkStyle, prevStyle, nextStyle } from './previousNext.module.css'

const PreviousNext = ({ slug, date, previousNext }) => {
  console.log('previousPage:', previousNext.previous)
  console.log('currentPage:', previousNext.current)
  console.log('nextPage:', previousNext.next)
  console.log(slug,date)
  
  let locationStateForPrevious = {
    current: previousNext.previous,
    next: previousNext.current,
  }
  let locationStateForNext = {
    previous: previousNext.current,
    current: previousNext.previous,
  }
  return (
    <div>
      <hr/>
      <ul className={linkStyle}>
        <li className={prevStyle}>
          {previousNext.previous ? 
            <Link to={`${previousNext.previous}`}
              state={locationStateForPrevious}
            >◀ Prev</Link>
            :
            <div></div>
          }
        </li>
        <li className={nextStyle}>
            {previousNext.next ? 
            <Link to={`${previousNext.next}`}
              state={locationStateForNext}
            >Next ▶</Link>
            :
            <div></div>
            }
        </li>
      </ul>
    </div>
  )
}

export default PreviousNext