import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

const style = {
  grid: {
    margin: '0 -15px',
    width: 'calc(100% + 30px)',
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  },
  roundsGap: {
    marginBottom: '20px',
  },
  form1: {
    display: 'block',
  },
  form2: {
    display: 'none',
  },
};

function GridContainer({ ...props }) {
  const { classes, children, className, gridBorder, roundsGap, display1, ...rest } = props;

  const gapClass = classNames({
    // [classes.round]: round,
    [classes.roundsGap]: roundsGap,
  });
  return (
    <Grid
      container
      {...rest}
      className={`${classes.grid} ${className} ${gapClass}`}
      style={{ border: gridBorder, display: display1 }}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
