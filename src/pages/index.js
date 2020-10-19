import React from "react"

// import { Link } from "gatsby"

// child components
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Blog Machine </h1>
    <p>...this blog was built using [the Great] Gatsby</p>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
