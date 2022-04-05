import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  authorProfileStyle,
  authorProfileList,
  authorProfileItem,
  authorProfileText,
  authorProfileTextDetail,
  authorProfileAdStyle,
} from './authorProfile.module.css'

const AuthorProfile = () => {
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
    <div className={authorProfileStyle}>
      <ul className={authorProfileList}>
          <li className={authorProfileItem}>
            <div className={authorProfileText}>
              サイト管理者: {data.site.siteMetadata.siteAuthor}
            </div>
          </li>
          <li className={authorProfileItem}>
            <div className={authorProfileTextDetail}>
              {data.site.siteMetadata.siteAuthorProfile}
            </div>
          </li>
          <li className={authorProfileAdStyle}>
            <a href="https://px.a8.net/svt/ejp?a8mat=3N6E9C+DSJJAQ+0K+10UIMP" rel="nofollow">
            <img border="0" width="234" height="60" alt="" src="https://www20.a8.net/svt/bgt?aid=220328112834&wid=001&eno=01&mid=s00000000002006189000&mc=1"/></a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3N6E9C+DSJJAQ+0K+10UIMP" alt=""/>
          </li>
      </ul>
    </div>
  )
}

/* サイト名を書くときに使う
  <li className={authorProfileItem}>
    <Link to='/' className={authorProfileText}>
      {data.site.siteMetadata.siteName}
    </Link>
  </li>
*/

export default AuthorProfile