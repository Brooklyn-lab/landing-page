"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./Certificates.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CERTIFICATES = [
  {
    id: 1,
    src: "/images/certificates/cert1.jpg",
    alt: "Certyfikat PodOS",
  },
  {
    id: 2,
    src: "/images/certificates/cert2.jpg",
    alt: "Certyfikat Refleksologia rąk",
  },
  {
    id: 3,
    src: "/images/certificates/cert3.jpg",
    alt: "Certyfikat Refleksologia stóp",
  },
  {
    id: 4,
    src: "/images/certificates/cert4.jpg",
    alt: "Certyfikat PodOS",
  },
  {
    id: 5,
    src: "/images/certificates/cert5.jpg",
    alt: "Certyfikat UniBrace",
  },
];

export const Certificates = () => {
  return (
    <section
      className={styles.certificatesSection}
      id="portfolio"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>moje certyfikaty</h2>
        <p className={styles.description}>
          W moim gabinecie oferuję specjalistyczne i nowoczesne metody leczenia.
          Stosuję systemy korekcji UniBrace, nici tytanowe, które szybko
          pomagają w rozwiązaniu problemów wrastających i zdeformowanych
          paznokci. Prowadzę terapię polegającą na leczeniu brodawek, pęknięć na
          piętach, eliminowaniu modzeli, odcisków.
        </p>

        <div className={styles.sliderContainer}>
          <button className={styles.prevButton} aria-label="Previous slide">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 7L7 1"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: `.${styles.prevButton}`,
              nextEl: `.${styles.nextButton}`,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={styles.slider}
          >
            {CERTIFICATES.map((cert) => (
              <SwiperSlide key={cert.id} className={styles.slide}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={294}
                    height={220}
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={styles.nextButton} aria-label="Next slide">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
