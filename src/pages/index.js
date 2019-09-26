import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from '../components/HeroBanner/heroBanner';
import FloatingCard from '../components/FloatingCard/floatingCard';
import Newsletter from '../components/Newsletter/newsletter';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePage {
      contentfulHomePage {
        id
        body { json }
        title
      }
    }
  `);

  return ( 
    <Layout>
      <SEO title="Home" />
      <HeroBanner/>
      
      <FloatingCard>
        {documentToReactComponents(data.contentfulHomePage.body.json)}
        <Newsletter/>
      </FloatingCard>
    </Layout>
  )
}

export default IndexPage
