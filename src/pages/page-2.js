import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Page from "../templates/page"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Page/>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage
