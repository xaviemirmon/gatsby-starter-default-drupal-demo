import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DrupalPage = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <h1>{data.allNodePage.edges[0].node.title}</h1>
      <p dangerouslySetInnerHTML={{__html: data.allNodePage.edges[0].node.body.value}} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyDrupalPageQuery {
    allNodePage {
      edges {
        node {
          body {
            value
          }
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Drupal Page" />

export default DrupalPage
