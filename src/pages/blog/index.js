import * as React from 'react'
import Layout from '../../components/layout'
import {Link,graphql} from 'gatsby' 

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
                {console.log(node.id)}
              </Link>
            </h2>
            <p>posted: {node.frontmatter.date}</p>
          </article>
        ))
        
      }
      <p>My cool posts will go in here</p>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`
export default BlogPage