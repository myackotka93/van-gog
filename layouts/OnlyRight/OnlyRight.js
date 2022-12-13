import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './OnlyRight.module.scss';

function OnlyRight({ className, children }) {
  return (
    <div className={classNames(styles.OnlyRight, className)}>
      {children}
    </div>
  )
}

OnlyRight.propType = {
}

export default React.memo(OnlyRight);
