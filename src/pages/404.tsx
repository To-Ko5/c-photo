import React from 'react'
import { Link } from 'gatsby'
// components
import Layouts from '../components/layouts'
import Head from '../components/head'
// style
import Error from '../styles/error.module.scss'

export default ({ location }) => {
  return (
    <Layouts>
      <Head
        pageTitle="ページが見つかりません"
        pageDescription={null}
        pagePath={location.pathname}
      />
      <div className={Error.error}>
        <div className={Error.error__inner}>
          <h1 className={Error.error__title}>
            お探しのページが見つかりませんでした。
          </h1>
          <div className={Error.error__back}>
            <Link to={'/'}>Top Pageに戻る</Link>
          </div>
        </div>
      </div>
    </Layouts>
  )
}
