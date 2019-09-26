import React from 'react';
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import styles from './productGrid.module.scss';

const ProductGrid = () => {
  return (
    <div className={styles.root}>
      <GridList cellHeight={200} cols={3}>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img src="https://houseofdancetwincities.com/wp-content/uploads/2019/08/67666743_704748109991778_140094527456149504_n.jpg" />
          <GridListTileBar
            title="Fall Showcase"
            subtitle="$15"
            actionIcon={
              <IconButton aria-label="Add to cart" className={styles.icon}>
                <ShoppingCart/>
              </IconButton>
            }
          />
        </GridListTile>
      </GridList>
    </div>
  )
}

export default ProductGrid;