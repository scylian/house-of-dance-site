import React from 'react';
import withSyles from '@material-ui/core/styles/withStyles';

// Components
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import { People, Email } from '@material-ui/icons';
import GridContainer from '../../material-kit-react/components/Grid/GridContainer';
import GridItem from '../../material-kit-react/components/Grid/GridItem';
import Card from '../../material-kit-react/components/Card/Card';
import CardHeader from '../../material-kit-react/components/Card/CardHeader';
import CardBody from '../../material-kit-react/components/Card/CardBody';
import CardFooter from '../../material-kit-react/components/Card/CardFooter'
import Button from '../../material-kit-react/components/CustomButtons/Button';
import CustomInput from '../../material-kit-react/components/CustomInput/CustomInput';
import withStyles from '@material-ui/core/styles/withStyles';

// Styles
import newsletterStyles from '../../material-kit-react/jss/material-kit-react/views/componentsSections/loginStyle';


const Newsletter = (props) => {
  const { classes } = props;

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <form className={classes.form}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4>Newsletter</h4>
            </CardHeader>
            <p className={classes.divider}>Sign up for updates</p>
            <CardBody>
              <CustomInput
                labelText="First Name..."
                id="first"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <CustomInput
                labelText="Last Name..."
                id="last"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <CustomInput
                labelText="Email..."
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "email",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg">
                Subscribe
              </Button>
            </CardFooter>
          </form>
        </Card>
      </GridItem>
    </GridContainer>
  )
}

export default withStyles(newsletterStyles)(Newsletter);