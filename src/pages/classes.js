import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Parallax from '../material-kit-react/components/Parallax/Parallax';
import GridContainer from '../material-kit-react/components/Grid/GridContainer';
import GridItem from '../material-kit-react/components/Grid/GridItem';
import { Container } from '@material-ui/core';
import FloatingCard from '../components/FloatingCard/floatingCard';
import ProductGrid from '../components/ProductGrid/productGrid';

// Styles
import styles from '../templates/page.module.scss';

const Classes = () => {
  return (
    <Layout>
      <SEO title="Classes" />
      <Parallax filter image="https://images.ctfassets.net/9vvcuhjo27nb/3373jWEdUGIuVziPBw9mKE/d19e91503d44fafeb49bc5773234acea/hod-freeze.jpg?w=1920&q=50">
        <Container className={styles.container}>
          <GridContainer>
            <GridItem>
              <h1 className={styles.bannerText}>CLASSES</h1>
            </GridItem>
          </GridContainer>
        </Container>
      </Parallax>

      <FloatingCard>
        <h2>WINTER CLASS SCHEDULES WILL BE AVAILABLE ON MONDAY, OCTOBER 7TH</h2>
        <h2>&</h2>
        <h2>REGISTRATION WILL OPEN ONLINE ON MONDAY, OCTOBER 14TH!</h2>
        <p>SPECIAL multi-class offer! -> Use coupon code: HIPHOPKINS to receive 10% off of your total during checkout when you sign up for 2 (or more) regular classes!</p>
        <hr></hr>
        <ProductGrid/>
      </FloatingCard>
    </Layout>
  )
}

export default Classes