import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ButtonCircle.module.scss';
import Link from 'next/link';

const ButtonCircle = forwardRef(({ children, className, empty, link, ...props }, ref) => {
  if (link) {
    return (
      <Link href={link}>
        <a rel="noreferrer" target="_blank" className={classNames(styles.ButtonCircle, className, { [styles.empty]: empty })} ref={ref} {...props}>
          {children}
        </a>
      </Link>
    )
  }
  console.log(`ref is ${ref}`);
  return (
    <button className={classNames(styles.ButtonCircle, className, { [styles.empty]: empty })} ref={ref} {...props}>
      {children}
    </button>
  )
})

ButtonCircle.propType = {
}

ButtonCircle.displayName = 'ButtonCircle';

export default React.memo(ButtonCircle);
