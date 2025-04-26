"use client";

import Image from "next/image";
import styles from "./Why.module.scss";
import { useLocale } from "@/app/i18n/LocaleContext";

export const Why = () => {
  const { t } = useLocale();
  const description = t("description", "why") as string[];

  return (
    <section id="why" className={styles.why}>
      <div className={styles.images}>
        <Image
          src="/images/why/why-1.jpg"
          alt="PodOS service 1"
          width={500}
          height={350}
          className={styles.image}
        />
        <Image
          src="/images/why/why-2.jpg"
          alt="PodOS service 2"
          width={500}
          height={350}
          className={styles.image}
        />
        <Image
          src="/images/why/why-3.jpg"
          alt="PodOS service 3"
          width={500}
          height={350}
          className={styles.image}
        />
        <Image
          src="/images/why/why-4.jpg"
          alt="PodOS service 4"
          width={500}
          height={350}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("title", "why")}</h2>
          <p className={styles.subtitle}>{t("subtitle", "why")}</p>
        </div>
        <div className={styles.features}>
          {description.map((paragraph: string, index: number) => (
            <p key={index} className={styles.feature}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
