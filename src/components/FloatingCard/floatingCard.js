import React from 'react';
import classNames from 'classnames';
import { Container } from '@material-ui/core';

// Styles
import styles from './floatingCard.module.scss';

const FloatingCard = (props) => {

  return (
    <div className={classNames(styles.main, styles.mainRaised)}>
      <Container>
        {props.children}
      </Container>
    </div>
  )
}

export default FloatingCard;