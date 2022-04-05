import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  sideBarStyle,
  sideBarList,
  sideBarItem,
  sideBarText,
  sideBarTextDetail,
  sideBarAdStyle,
} from './sideBar.module.css'


const SideBar = () => {
  const data  = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
            siteAuthor
            siteAuthorProfile
          }
        }
      }
    `
  );
  return(
    <aside className={sideBarStyle}>
      <ul className={sideBarList}>
          <li className={sideBarItem}>
            <div className={sideBarText}>
              サイト管理者: {data.site.siteMetadata.siteAuthor}
            </div>
          </li>
          <li className={sideBarItem}>
            <div className={sideBarTextDetail}>
              {data.site.siteMetadata.siteAuthorProfile}
            </div>
          </li>
          <li className={sideBarAdStyle}>
            <a href="https://px.a8.net/svt/ejp?a8mat=3N6E9C+DSJJAQ+0K+ZX2XD" rel="nofollow">
              <img border="0" width="250" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=220328112834&wid=001&eno=01&mid=s00000000002006033000&mc=1"/>
            </a>
            <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=3N6E9C+DSJJAQ+0K+ZX2XD" alt=""/>
          </li>
      </ul>
    </aside>
  )
}
/* サイト名を書くときに使う
          <li className={sideBarItem}>
            <Link to='/' className={sideBarText}>
              {data.site.siteMetadata.siteName}
            </Link>
          </li>

*/

export default SideBar