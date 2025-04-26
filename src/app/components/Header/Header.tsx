"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import styles from "./Header.module.scss";
import { cn } from "@/app/utils/cn";
import { useLocale } from "@/app/i18n/LocaleContext";

const SECTIONS = [
  "about",
  "why",
  "services",
  "address",
  "portfolio",
  "contact",
] as const;
type Section = (typeof SECTIONS)[number];

export function Header() {
  const { t, locale } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);

      if (scrollPosition === 0) {
        setActiveSection(null);
        return;
      }

      // Додаємо висоту хедера до скролу для компенсації
      const viewportTop = scrollPosition;
      const viewportBottom = viewportTop + window.innerHeight;
      const headerHeight = 72;

      // Знаходимо всі секції
      const sectionElements = SECTIONS.map((section) => {
        const element = document.getElementById(section);

        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const top = rect.top + scrollPosition;
        const bottom = rect.bottom + scrollPosition;

        // Додаємо мінімальний поріг видимості (20% висоти секції)
        const minVisibleThreshold = (bottom - top) * 0.2;

        return {
          id: section,
          top,
          bottom,
          height: bottom - top,
          minVisibleThreshold,
        };
      }).filter(
        (section): section is NonNullable<typeof section> => section !== null
      );

      // Знаходимо секцію, яка займає найбільшу частину viewport і перевищує мінімальний поріг
      let maxVisibleSection: Section | null = null;
      let maxVisibleHeight = 0;

      sectionElements.forEach((section) => {
        const visibleTop = Math.max(section.top, viewportTop + headerHeight);
        const visibleBottom = Math.min(section.bottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (
          visibleHeight > section.minVisibleThreshold &&
          visibleHeight > maxVisibleHeight
        ) {
          maxVisibleHeight = visibleHeight;
          maxVisibleSection = section.id;
        }
      });

      setActiveSection(maxVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Даємо час для рендеру всіх секцій
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(styles.header, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <Link href={locale === "ua" ? "/ua" : "/"} className={styles.logo}>
          <div style={{ width: 32, height: 32, position: "relative" }}>
            <Image
              src="/logo_podos_circle.png"
              alt="PodOS Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <span>PodOS</span>
        </Link>

        <nav className={cn(styles.nav, isMenuOpen && styles.open)}>
          {SECTIONS.map((section) => (
            <Link
              key={section}
              href={`${locale === "ua" ? "/ua" : ""}/#${section}`}
              className={cn(
                styles.link,
                activeSection === section && styles.active
              )}
              onClick={() => setActiveSection(section)}
            >
              {t(section, "nav")}
            </Link>
          ))}
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.langSwitcher}>
            <Link
              href="/"
              className={cn(
                styles.langButton,
                locale === "pl" && styles.active
              )}
            >
              PL
            </Link>
            <Link
              href="/ua"
              className={cn(
                styles.langButton,
                locale === "ua" && styles.active
              )}
            >
              UA
            </Link>
          </div>

          <div className={styles.contacts}>
            <Link
              href={`tel:${t("phone", "header")}`}
              className={styles.contact}
            >
              <Phone size={16} />
              <span>{t("phone", "header")}</span>
            </Link>
            <Link
              href={`mailto:${t("email", "header")}`}
              className={styles.contact}
            >
              <Mail size={16} />
              <span>{t("email", "header")}</span>
            </Link>
          </div>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
