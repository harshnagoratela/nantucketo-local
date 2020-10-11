import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'

const ArticlesPage = ({ data: { allGoogleSheetLinksRow } }) => {
  const allArticles = allGoogleSheetLinksRow.edges.map(article => ({
    ...article.node,
    slug: `/article/${article.node.articleid}/`,
    date: article.node.dateadded,
  }))

  return (
    <Layout title="a Nantucket shop" description="a nantucket store & blog for nantucketers everywhere">
      <PageHeader
        title="Articles"
        subtitle="See all articles"
        backgroundImage="../images/headless_hero.jpg"
      />
      <section className="section">
        <div className="container">
          <PostSection title="Recent Articles" posts={allArticles} />
        </div>
      </section>
    </Layout>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query MyQuery {
    allGoogleSheetLinksRow(sort: {fields: dateadded, order: DESC}) {
      edges {
        node {
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
    }
  }

`;