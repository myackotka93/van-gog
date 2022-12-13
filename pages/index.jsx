import { useEffect, useState } from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import { Navigation, Keyboard , Pagination } from 'swiper';
import OnlyRight from '@/layouts/OnlyRight/OnlyRight';
import Button from '@/components/Button/Button';
import styles from './index.module.scss';
import './i18n';
import { useTranslation } from "react-i18next";
// import typograf, { parser } from '@/utils/typograf';
// import * as prettyjson from "prettyjson";

export default function Home({ attributes, ...props }) {

  const [domLoaded, setDomLoaded] = useState(false);
  const { t, i18n } = useTranslation(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <>{domLoaded && (

        <div className={styles.body}>
          <div className={styles.promo}>
            <img className={styles.logo} src="/images/logo.svg" alt="" />
            <div className={styles.languages}>
              <div className={styles.language} onClick={() => changeLanguage("ru")}>RU</div>
              <div className={styles.language} onClick={() => changeLanguage("kz")}>KZ</div>
              <div className={styles.language} onClick={() => changeLanguage("arm")}>arm</div>
            </div>
            <div className={styles.date}>25.12-10.03</div>
            <div className={styles.text}>{t("text")}</div>
            <div className={styles.title}>{t("title")}</div>
            <div className={styles.discription}>{t("discription")}</div>
            <div className={styles.Button}>
            <Button>{t("button")}</Button>
            </div>
          </div>

          <Layout className={styles.exposition__layout}>
            <LayoutLeft className={styles.exposition__left}>
              <img className={styles.exposition_flower} src="/images/flower.png" alt="" />
            </LayoutLeft>

            <LayoutRight className={styles.exposition__right}>
              <div className={styles.exposition}>{t("exposition")}</div>
              <div className={styles.exposition_discription}>{t("exposition_discription")}</div>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <img className={styles.card_image} src='/images/card-1.png' alt="" />
                  <div className={styles.info_image}>{t("info.part1")}</div>
                </div>
                <div className={styles.card}>
                  <img className={styles.card_image} src='/images/card-2.png' alt="" />
                  <div className={styles.info_image}>{t("info.part2")}</div>
                </div>
                <div className={styles.card}>
                  <img className={styles.card_image} src='/images/card-3.png' alt="" />
                  <div className={styles.info_image}>{t("info.part3")}</div>
                </div>
              </div>

              <div className={styles.images}>
              {attributes.images.map(m => (
                  <img className={styles.card_image} key={m.id} {...m} src={m.img} alt="" />
                ))}
              </div>
            </LayoutRight>
          </Layout>

          <Layout className={styles.immersia_container}>
            <OnlyRight>
              <div className={styles.immersia}>{t("immersia")}</div>
            </OnlyRight>
          </Layout>

          <div className={styles.sliders}>
                <Swiper
                    slidesPerView={1.97}
                    className={styles.swiper}
                    // spaceBetween={0}
                    // breakpoints={{
                    // 800: {
                    //     slidesPerView: 1,
                    //     spaceBetween: 58
                    //   }
                    // }}
                    loop
                    isEnableLoop
                    pagination={{
                      clickable: true
                    }}
                    centeredSlides={true}
                    modules={[Navigation, Pagination, Keyboard ]}
                  >
                    {attributes.sliders.map(m => (
                      <SwiperSlide className={styles.SwiperSlide} key={m.id}>
                        <img src={m.img} alt="" {...m} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>

          <Layout className={styles.contacts_layout}>
            <OnlyRight className={styles.OnlyRight}>
              <div className={styles.contacts}>{t("contacts")}</div>
              <div className={styles.columns}>
                <div className={styles.column}>
                  <div className={styles.heading}>{t("operating_mode")}</div>
                  <div className={styles.flex}>
                    <div className={styles.days}>
                      <div className={styles.day}>{t("day.part1")}</div>
                      {/* <div className={styles.day}>{t("day.part2")}</div> */}
                    </div>
                    <div className={styles.days}>
                      <div className={styles.day}>{t("day.part3")}</div>
                      {/* <div className={styles.day}>{t("day.part4")}</div> */}
                    </div>
                  </div>
                </div>

                <div className={styles.column}>
                  <div className={styles.heading}>{t("tickets")}</div>
                  <div className={styles.flex}>
                    <div className={styles.days}>
                      <div className={styles.day}>{t("price.part1")}</div>
                      <div className={styles.day}>{t("price.part2")}</div>
                    </div>
                    <div className={styles.days}>
                      <div className={styles.day}>{t("price.part3")}</div>
                      <div className={styles.day}>{t("price.part4")}</div>
                    </div>
                  </div>
                </div>

                <div className={styles.column}>
                  <div className={styles.heading}>{t("phone_title")}</div>
                  <div className={styles.day}>{t("phone")}</div>
                  <div className={styles.day}>{t("adress")}</div>
                </div>
              </div>
              
            </OnlyRight>
          </Layout>

          <Layout className={styles.map}>
            <iframe src={t("map")} width="100%" height="632" frameborder="0"></iframe>
          </Layout>

          <Layout className={styles.layout_footer}>
            <img className={styles.img_footer} src="/images/flowers/flower-5.png" alt="" />

            <img className={styles.img_footer_small} src="/images/flowers/flower-6.png" alt="" />
          </Layout>
        </div>

      )}
    </>
  )
}

export async function getStaticProps() {
  // const response = await fetcher('api/page/home', ctx);

  return {
    props: {
      attributes: {
        cards: [
          {
            media: '/images/card-1.png',
            info: '“Желтый дом”, 1888 год, г.Арль',
          },
          {
            media: '/images/card-2.png',
            info: '“Звездная ночь”, 1889 год, г.Сен-Реми',
          },
          {
            media: '/images/card-3.png',
            info: '“Звездная ночь над Роной”, 1888 год, г. Арль',
          },
        ],
        images: [
          {
            img: '/images/slider/item-1.png'
          },
          {
            img: '/images/slider/item-2.png'
          },
          {
            img: '/images/slider/item-3.png'
          }
        ],
        sliders: [
          {
            img: '/images/slider/item-1.png'
          },
          {
            img: '/images/slider/item-2.png'
          },
          {
            img: '/images/slider/item-3.png'
          },
          {
            img: '/images/slider/item-4.jpg'
          },
          {
            img: '/images/slider/item-5.jpg'
          },
          {
            img: '/images/slider/item-6.jpg'
          },
          {
            img: '/images/slider/item-7.jpg'
          },
          {
            img: '/images/slider/item-8.jpg'
          },
        ],
      }
    }
  }
}
