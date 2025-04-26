"use client";

import styles from "./Hero.module.scss";
import { useLocale } from "@/app/i18n/LocaleContext";

export const Hero = () => {
  const { t } = useLocale();

  return (
    <section data-section="home" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("title", "hero")}</h1>
      </div>
    </section>
  );
};
