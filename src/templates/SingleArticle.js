import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'

// Export Default SinglePost for front-end
const SingleArticle = ({ data: { article } }) => {
  return (
    <Layout
      meta={article.meta || false}
      title={article.title || false}
    >
      <main>
        <PageHeader />
        <article
          className="SinglePost section light"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="container skinny">
            <Link className="SinglePost--BackButton" to="/article/">
              <ChevronLeft /> BACK
          </Link>
            <div className="SinglePost--Content relative">
              <div className="SinglePost--Meta">
                {article.dateadded}                
              </div>

              {article.title && (
                <h1 className="SinglePost--Title" itemProp="title">
                  {article.title}
                </h1>
              )}

              <div className="SinglePost--InnerContent">
                <Content source={article.text} />
              </div>


            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default SingleArticle

export const pageQuery = graphql`
  query SingleArticle($articleid: Int!) {
    article: googleSheetLinksRow(articleid: {eq: $articleid}) {
      articleid
      author
      comment
      dateadded(formatString: "dddd MMM DD, YYYY")
      excerpt
      highlight
      highlight2
      id
      image
      images
      popularity
      publishdate
      relativepopularity
      source
      source2
      tags
      text
      title
      url
    }
    
  }
`
