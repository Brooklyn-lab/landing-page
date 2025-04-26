"use client";

import Image from "next/image";
import styles from "./About.module.scss";
import { useLocale } from "@/app/i18n/LocaleContext";

export const About = () => {
  const { t } = useLocale();
  const description = t("description", "about") as string[];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.header}>
              <h2 className={styles.title}>{t("title", "about")}</h2>
              <p className={styles.subtitle}>{t("subtitle", "about")}</p>
            </div>

            <div className={styles.description}>
              {description.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/about-photo.jpg"
              alt="Olena Stepaniuk"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 320px, (max-width: 1200px) 400px, (max-width: 1440px) 460px, 563px"
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
