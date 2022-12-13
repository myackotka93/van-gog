import classnames from 'classnames';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@/components/Button/Button';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import Link from 'next/link';
import styles from './Visiting.module.scss';
import typograf, { parser } from '@/utils/typograf';

function Visiting({ days, times, img, title, correction, button, booking, standart_price, benefits_price, standart, benefits, name, link, flag }) {
  return (
    <>
      <Layout className={styles.Visiting}>
        <LayoutLeft className={styles.LayoutLeft}>
          <img className={styles.img} src={img} alt="" />
          <div className={styles.name}>{name}</div>
          {link ? <div className={styles.name}>{name}</div> : <div className={styles.none}></div>}
        </LayoutLeft>
        <LayoutRight className={styles.LayoutRight}>

          <div className={styles.title_container} id="visiting">
            <div className={styles.title}>{title}</div>
            {flag && <div className={styles.flag}>Экспозиция временно закрыта</div>}
          </div>
          
          <div className={styles.heading_time}>Режим работы</div>
          <div className={styles.columns}>
            <div className={styles.first}>
              <div className={styles.days}>
                {days.map((p, i) => (
                  <div className={styles.time} key={i}>{p.day}</div>
                ))}
              </div>
              <div className={styles.times}>
                {times.map((p, i) => (
                  <div className={styles.time_price} key={i}>{p.time}</div>
                ))}
              </div>
            </div>
            <div className={styles.correction}>{correction}</div>
          </div>
          <div className={styles.heading_time}>Стоимость билетов</div>
          <div className={styles.columns}>
            <div className={styles.second}>
              <div className={styles.days}>
                <div className={styles.time}>{standart}</div>
                <div className={styles.time}>{benefits}</div>
              </div>
              <div className={styles.days}>
                <div className={styles.time_price}>{standart_price}</div>
                <div className={styles.time_price}>{benefits_price}</div>
              </div>
            </div>
            <div className={styles.correction}>{booking}</div>
          </div>
          <Link href={link}>
            <Button className={styles.button} white>{button}</Button>
          </Link>
        </LayoutRight>
      </Layout>
    </>
  )
}

Visiting.propType = {
}

export default React.memo(Visiting);
