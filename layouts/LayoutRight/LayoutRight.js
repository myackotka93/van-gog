import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './LayoutRight.module.scss';

function LayoutRight({ children, className, right, light }) {
  return (
    <div className={classNames(styles.LayoutRight, className, { [styles.right]: right, [styles.light]: light })}>
      {children}
    </div>
  )
}

LayoutRight.propType = {
}

export default React.memo(LayoutRight);
