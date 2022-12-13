import classnames from 'classnames';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import animateScrollTo from 'animated-scroll-to';
import styles from './Promo.module.scss';

function Promo({ img, discription, name, link, donation }) {

  function handleScrollTo(id) {
    animateScrollTo(id === 'header' ? 0 : document.getElementById(id), { speed: 500, verticalOffset: -100 })
  }


  return (
    <>
      <Layout className={styles.Promo}>
        <LayoutLeft className={styles.left}>
          <img className={styles.img} src={img} alt="" />
          <div className={styles.name}>{name}</div>
          <Link href={link}>
            <Button black className={styles.button_tablet}>Купить билет</Button>
          </Link>
          <Link href={donation}>
            <Button empty className={styles.button_white_tablet}>Поддержать музей</Button>
          </Link>
        </LayoutLeft>
        <LayoutRight className={styles.right}>
          <div className={styles.heading}>Звенигородский государственный музей-заповедник</div>
            <div className={styles.title}>Звенигородский Манеж</div>
            <div className={styles.discription}>{discription}</div>
            <div className={styles.columns}>
            <Link href={link}>
              <Button black className={styles.button}>Купить билет</Button>
            </Link>
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
        </LayoutRight>
      </Layout>
    </>
  )
}

Promo.propType = {
}

export default React.memo(Promo);
