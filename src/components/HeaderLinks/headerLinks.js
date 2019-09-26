import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import withStyles from '@material-ui/core/styles/withStyles'
import { List, ListItem, Tooltip } from '@material-ui/core';
import { Apps, CloudDownload } from '@material-ui/icons';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// Components
import CustomDropdown from '../../material-kit-react/components/CustomDropdown/CustomDropdown';
import Button from '../../material-kit-react/components/CustomButtons/Button';

// Styles
import headerLinksStyle from '../../material-kit-react/jss/material-kit-react/components/headerLinksStyle';
import styles from './headerLinks.module.scss';

const HeaderLinks = (props) =>  {
  const { classes } = props;
  const data = useStaticQuery(graphql`
    query NavLinks {
      allContentfulNavigationLinks (sort: { fields: createdAt }) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <List className={classes.list}>
      {data.allContentfulNavigationLinks.edges.map((edge, index) => {
        return (
        <ListItem className={classes.listItem} key={index}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <Link to={'/'+edge.node.slug} className={styles.link}>{edge.node.name}</Link>
          </Button>
        </ListItem>
      )})}
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks);