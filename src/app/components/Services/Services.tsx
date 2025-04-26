"use client";

import React, { useState } from "react";
import styles from "./Services.module.scss";
import { useLocale } from "@/app/i18n/LocaleContext";
import { cn } from "@/app/utils/cn";

interface ServiceItem {
  id: number;
  title: string;
  price: string;
  duration: string;
  description?: string;
}

export const Services = () => {
  const { t } = useLocale();
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = t<ServiceItem[]>("items", "services");
  const description = t<string[]>("description", "services");
  const labels = t("labels", "services") as {
    price: string;
    description: string;
    duration: string;
  };

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  // Розділяємо сервіси на дві колонки
  const midPoint = Math.ceil(services.length / 2);
  const leftServices = services.slice(0, midPoint);
  const rightServices = services.slice(midPoint);

  const renderServiceItem = (service: ServiceItem, index: number) => (
    <div
      key={service.id}
      className={cn(
        styles.serviceItem,
        activeService === index && styles.active
      )}
      onClick={() => toggleService(index)}
    >
      <div className={styles.serviceHeader}>
        <h3>{service.title}</h3>
        <div className={styles.arrow} />
      </div>
      <div
        className={cn(
          styles.serviceContent,
          activeService === index && styles.active
        )}
      >
        <div className={styles.serviceDetails}>
          <p className={styles.price}>
            <span className={styles.label}>{labels.price}:</span>{" "}
            {service.price}
          </p>
          {service.description && (
            <p className={styles.description}>
              <span className={styles.label}>{labels.description}:</span>{" "}
              {service.description}
            </p>
          )}
          <p className={styles.duration}>
            <span className={styles.label}>{labels.duration}:</span>{" "}
            {service.duration}
          </p>
        </div>
      </div>
    </div>
  );

  if (!services || !Array.isArray(services)) {
    console.error("Services data is not in the expected format:", services);
    return null;
  }

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("title", "services")}</h2>
          <div className={styles.headerContent}>
            <div>
              <p className={styles.subtitle}>{t("subtitle", "services")}</p>
            </div>
            <div className={styles.description}>
              {description.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.servicesList}>
          <div className={styles.servicesColumn}>
            {leftServices.map((service, index) =>
              renderServiceItem(service, index)
            )}
          </div>
          <div className={styles.servicesColumn}>
            {rightServices.map((service, index) =>
              renderServiceItem(service, index + midPoint)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
