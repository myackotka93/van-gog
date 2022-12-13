import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './IconNew.module.scss';
import { HandySvg } from './index';

const icons = {
  centerReb: require('./icons/center-reb.svg'),
  centerK31: require('./icons/centerK31.svg'),
  houseK31: require('./icons/houseK31.svg'),
  woomanK31: require('./icons/woomanK31.svg'),
  woomanReb: require('./icons/wooman-reb.svg'),
  bigCenter: require('./icons/big-center.svg'),
  bigCenter: require('./icons/big-center.svg'),
  telegramMedia: require('./icons/telegram-media.svg'),
  mailMedia: require('./icons/mail-media.svg'),
}

function IconNew({ name, className }) {
  const icon = icons[name]?.default;

  if (!icon) {
    return null;
  }

  return (
    <HandySvg
      src={icon.src}
      className={className}
      width={icon.width}
      height={icon.height}
    />
  );
}

IconNew.propType = {
}

export default React.memo(IconNew);
