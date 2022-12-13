import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle';
import Link from 'next/link';
import animateScrollTo from 'animated-scroll-to';
import styles from './Footer.module.scss';
import typograf from '@/utils/typograf';

function Footer({ bureau, secretary, accountant, email, adress}) {

  function handleScrollTo(id) {
    animateScrollTo(id === 'header' ? 0 : document.getElementById(id), { speed: 500, verticalOffset: -100 })
  }

  return (
      <Layout className={styles.Footer} >
        <LayoutLeft className={styles.LayoutLeft}>
          <img className={styles.img} src="/images/logo-footer.svg" alt="" id="footer"/>
        </LayoutLeft>
        <LayoutRight className={styles.LayoutRight}>
        <div className={styles.two_columns}>
        <div className={styles.first_column}>
          <div className={styles.nav}>
            <Link href="/#repertoire" scroll={false}>
              <a onClick={() => handleScrollTo('repertoire')} className={styles.item}>
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

        <div className={styles.second_column}>
          <div className={styles.container}>
            <div className={styles.tel_bureau}>{bureau}</div>
            <div className={styles.tel_secretary}>{secretary}</div>
            <div className={styles.tel_accountant}>{accountant}</div>
            <div className={styles.email}>{email}</div>
          </div>
          <div className={styles.adress}>{adress}</div>
        </div>
      </div>
        </LayoutRight>
      </Layout>
  )
}

Footer.propType = {
}

export default React.memo(Footer);
