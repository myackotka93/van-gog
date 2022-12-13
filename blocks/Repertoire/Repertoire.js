import classnames from 'classnames';
import React, { Children, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@/components/Button/Button';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import styles from './Repertoire.module.scss';
import typograf from '@/utils/typograf';
import urlConfig from "../../config/urlConfig";

function Repertoire({ images, discription, value }) {
  return (
      <Layout className={styles.Repertoire}>
        <LayoutLeft className={styles.images}>
        <div className={styles.title_tablet} id="repertoire_tablet">Что посмотреть</div>
        <div className={styles.discription_tablet}>{discription}</div>

          {images.map((p, i) => (
              <div className={styles.images_container} key={i}>
                <img className={styles.img} src={`${urlConfig.backBaseUrl}${p.attributes.url}`} alt=""/>
              </div>
            ))}
        </LayoutLeft>
        <LayoutRight className={styles.info}>

          <div className={styles.images_tablet}>
            {images.map((p, i) => (
                <div className={styles.images_container_tablet} key={i}>
                  <img className={styles.img} src={`${urlConfig.backBaseUrl}${p.attributes.url}`} alt=""/>
                </div>
              ))}
          </div>
          <div className={styles.title} id="repertoire">Что посмотреть</div>
          <div className={styles.discription}>{discription}</div>
          <div className={styles.container}>
            {value.map((p, i) => (
                <div className={styles.value_container} key={i}>
                  <h2 className={styles.value}>{p.value}<set className={styles.dop}>&nbsp;{p.prefix}</set></h2>
                  <p className={styles.text}>{typograf(p.text)}</p>
                </div>
              ))}
          </div>
          <img className={styles.page_first} src="/images/page-1.png"/>
          <img className={styles.page_second} src="/images/page-2.png"/>
          <img className={styles.page_third} src="/images/page-3.png"/>
          <img className={styles.page_fourth} src="/images/page-4.png"/>
        </LayoutRight>
      </Layout>
  )
}

Repertoire.propType = {
}

export default React.memo(Repertoire);
