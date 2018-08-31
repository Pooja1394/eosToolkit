import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import roundButtonStyle from './roundButtonStyle';

function RoundButton(props) {
  const { classes, value, currency } = props;
  // console.log('inputClasses ', classes);
  return (
    <ul className={`${classes.ul}`}>
      <li className={`${classes.li1}`}>{value}</li>
      <li className={`${classes.li2}`}>{currency}</li>
    </ul>
  );
}
RoundButton.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string,
  currency: PropTypes.string,
};
export default withStyles(roundButtonStyle)(RoundButton);
