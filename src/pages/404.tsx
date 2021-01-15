import React from 'react'

import Layouts from '../components/layouts'
import Head from '../components/head'

export default ({ location }) => {
  return (
    <Layouts>
      <Head
        pageTitle="ページが見つかりません"
        pageDescription={null}
        pagePath={location.pathname}
        pageImg={null}
        pageImgHeight={null}
        pageImgWidth={null}
      />
      <div className="404">
        <h1 className="about__title">お探しのページが見つかりませんでした。</h1>
      </div>
    </Layouts>
  )
}
