"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Locale, translations } from "./translations";
import { usePathname } from "next/navigation";

type LocaleContextType = {
  locale: Locale;
  t: <T = string>(key: string, section?: keyof typeof translations.pl) => T;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>("pl");

  useEffect(() => {
    setLocale(pathname.includes("/ua") ? "ua" : "pl");
  }, [pathname]);

  const t = <T = string,>(
    key: string,
    section?: keyof typeof translations.pl
  ): T => {
    if (section) {
      return (translations[locale][section][
        key as keyof (typeof translations.pl)[typeof section]
      ] || key) as T;
    }
    return (translations[locale][key as keyof typeof translations.pl] ||
      key) as T;
  };

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
