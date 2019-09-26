import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Components
import Parallax from '../../material-kit-react/components/Parallax/Parallax.jsx';
import GridContainer from '../../material-kit-react/components/Grid/GridContainer.jsx';
import GridItem from '../../material-kit-react/components/Grid/GridItem.jsx';

// Styles
import styles from './heroBanner.module.scss';

const HeroBanner = () => {
  const data = useStaticQuery(graphql`
    query HeroBanner {
      contentfulHeroBanner {
        title
        subtitle
        bannerImage {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <Parallax image={data.contentfulHeroBanner.bannerImage.fluid.src}>
      <div className={styles.container}>
        <GridContainer>
          <GridItem>
            <div className={styles.brand}>
              <h1 className={styles.title}>{data.contentfulHeroBanner.title}</h1>
              <h3 className={styles.subtitle}>{data.contentfulHeroBanner.subtitle}</h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}

export default HeroBanner