import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Body } from "../components/body";

const DrupalPage = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <h1>{data.nodePage.title}</h1>
      <Body text={data.nodePage.body.value} />

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($drupal_id: String) {
    nodePage(drupal_id: {eq: $drupal_id}) {
      title
      created
      status
      body {
        value
      }
    }
  }
`

export const Head = () => <Seo title="Drupal Page" />

export default DrupalPage
