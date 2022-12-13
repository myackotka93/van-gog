import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Layout.module.scss';

function Layout({ children, className, color }) {
  return (
    <div className={classNames(styles.Layout, className, styles[color])}>
      {children}
    </div>
  )
}

Layout.propType = {
}

export default React.memo(Layout);
