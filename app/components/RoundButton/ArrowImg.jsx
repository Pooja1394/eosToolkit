import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import arrowImgStyle from './arrowImgStyle';

function ArrowImg(props) {
  const { classes, imgValue } = props;
  // console.log('inputClasses ', classes);
  return (
    <div className={`${classes.imgContainer}`}>
      <img className={`${classes.arrowImg}`} src={`${imgValue}`} alt="logo" />
    </div>
  );
}
ArrowImg.propTypes = {
  classes: PropTypes.object,
  //   value: PropTypes.string,
};
export default withStyles(arrowImgStyle)(ArrowImg);
