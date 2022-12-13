import classnames from 'classnames';
import React, { Children, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@/components/Button/Button';
import styles from './Header.module.scss';
import animateScrollTo from 'animated-scroll-to';
import Icon from '@/components/Icon/Icon';
import Link from 'next/link';

function Header({ link }) {

  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);

  function handleHamburgerOpen() {
    setIsHamburgerOpen(true)
  }

  function handleHamburgerClose() {
    setIsHamburgerOpen(false)
  }

  function handleScrollTo(id) {
    animateScrollTo(id === 'header' ? 0 : document.getElementById(id), { speed: 500, verticalOffset: -100 })
  }


  return (
    <>
      <div className={styles.Header} id="header">
        <img className={styles.img} src="/images/logo-header.svg" alt="" />
        <button className={styles.hamburger} onClick={handleHamburgerOpen}>
          <Icon className={styles.hamburger_img} name="humburger" />
        </button>
        <Link href={link}>
          <Button className={styles.Button}>Поддержать музей</Button>
        </Link>
        <div className={classNames(styles.popup, isHamburgerOpen && styles.popup_opened)} onClick={handleHamburgerClose}>
          <div className={styles.popup__container}>
            <div className={styles.popup__wrapper}>
              
            <div className={styles.nav}>
                <Link href="/#repertoire_tablet" scroll={false}>
                  <a onClick={() => handleScrollTo('repertoire_tablet')} className={styles.item}>
                    экспозиция
                  </a>
                </Link>
                <Link href="/#excursion" scroll={false}>
                  <a onClick={() => handleScrollTo('excursion')} className={styles.item}>
                    экскурсии
                  </a>
                </Link>
                <Link href="/#visiting" scroll={false}>
                  <a onClick={() => handleScrollTo('visiting')} className={styles.item}>
                    режим работы
                  </a>
                </Link>
                <Link href="/#map" scroll={false}>
                  <a onClick={() => handleScrollTo('map')} className={styles.item}>
                    как добраться
                  </a>
                </Link>
                <Link href="/#footer" scroll={false}>
                  <a onClick={() => handleScrollTo('footer')} className={styles.item}>
                    контакты
                  </a>
                </Link>

              </div>
            </div>
            <img className={styles.img_small} src="/images/logo-header.svg" alt="" />
            <button className={styles.popup__button} onClick={handleHamburgerClose}>
              <Icon name="humburger_close" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propType = {
}

export default React.memo(Header);
