import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import buttonStyle from './buttonStyle';

function Button(props) {
  const { classes, value, onclick } = props;
  // console.log('inputClasses ', classes);
  return (
    <div className={`${classes.btn}`} onClick={onclick}>
      Pay {`${value}`}
    </div>
  );
}
Button.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string,
};
export default withStyles(buttonStyle)(Button);
