import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Parallax from '../material-kit-react/components/Parallax/Parallax';
import GridContainer from '../material-kit-react/components/Grid/GridContainer';
import GridItem from '../material-kit-react/components/Grid/GridItem';
import { Container } from '@material-ui/core';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import FloatingCard from '../components/FloatingCard/floatingCard';

// Styles
import styles from './page.module.scss';

const Page = () => {
  const data = useStaticQuery(graphql`
    query Page {
      contentfulPage {
        id
        body {
          json
        }
        banner {
          fluid(maxWidth: 1920) {
            src
          }
        }
        bannerText
        pageSlug
      }
    }
  `)

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img className={styles.img} alt={alt} src={url} />
      },
      'embedded-entry-inline': (node) => {
        const alt = node.data.target.fields.image['en-US'].fields.title['en-US']
        const url = node.data.target.fields.image['en-US'].fields.file['en-US'].url
        const body = node.data.target.fields.text['en-US']
        return (
          <GridContainer>
            <GridItem md={6}>
              <img className={styles.img} src={url} alt={alt} />
            </GridItem>
            <GridItem md={6}>
              {documentToReactComponents(body, options)}
            </GridItem>
          </GridContainer>
        )
      }
    }
  }
  return (
    <Layout>
      <SEO title={data.contentfulPage.pageSlug} />
      <Parallax filter image={data.contentfulPage.banner.fluid.src}>
        <Container className={styles.container}>
          <GridContainer>
            <GridItem>
              <h1 className={styles.bannerText}>{data.contentfulPage.bannerText}</h1>
            </GridItem>
          </GridContainer>
        </Container>
      </Parallax>

      <FloatingCard>
        {documentToReactComponents(data.contentfulPage.body.json, options)}
      </FloatingCard>
        
    </Layout>
  )
}

export default Page;