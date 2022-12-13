import classnames from 'classnames';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@/components/Button/Button';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import Link from 'next/link';
import styles from './PushkinCard.module.scss';

function PushkinCard({ img, tel_title, number_first, number_second, booking, discription, button, link }) {

  return (
    <>
      <Layout className={styles.Visiting}>
        <LayoutLeft className={styles.left}>
          <img className={styles.img} src={img} alt="" />
        </LayoutLeft>
        <LayoutRight className={styles.right}>
          <div className={styles.title}>Программы  для обладателей Пушкинской карты</div>
            <div className={styles.two_columns}>
              <div className={styles.first}>
                <div className={styles.discription}>{discription}</div>
                <div className={styles.booking}>{booking}</div>
              </div>
              <div className={styles.second}>
                <div className={styles.tel_title}>{tel_title}</div>
                <div className={styles.number_first}>{number_first}</div>
                <div className={styles.number_second}>{number_second}</div>
              </div>
            </div>
          <Link href={link}>
            <Button className={styles.button} white>{button}</Button>
          </Link> 
        </LayoutRight>
      </Layout>
    </>
  )
}

PushkinCard.propType = {
}

export default React.memo(PushkinCard);
