import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './LayoutLeft.module.scss';

function LayoutLeft({ children, className }) {
  return (
    <div className={classNames(styles.LayoutLeft, className)}>
      {children}
    </div>
  )
}

LayoutLeft.propType = {
}

export default React.memo(LayoutLeft);
