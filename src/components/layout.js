/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "../material-kit-react/components/Header/Header"
import HeaderLinks from '../components/HeaderLinks/headerLinks';
import Footer from '../components/Footer/footer';

// Styles
import "./layout.css"
import '../material-kit-react/scss/material-kit-react.scss?v=1.4.0';
import 'typeface-roboto';
import 'typeface-roboto-slab';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteBrand {
      contentfulSiteBrand {
        title
      }
    }
  `)

  return (
    <React.Fragment>
      <Header
        brand={data.contentfulSiteBrand.title}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <main>{children}</main>
      <Footer/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
