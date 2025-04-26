"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Footer.module.scss";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const currentYear = new Date().getFullYear();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
          to_email: "ilya.stepaniuk123@gmail.com",
        },
        "YOUR_PUBLIC_KEY"
      );
      alert("Повідомлення відправлено успішно!");
      reset();
    } catch (error) {
      alert(`Сталася помилка при відправці повідомлення ${error}.`);
    }
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Gabinet PodOS – zaufaj profesjonaliście.
            </h2>
            <p className={styles.description}>
              To nie tylko miejsce zabiegów, ale także swego rodzaju centrum
              edukacyjne, gdzie praktycznie pokazuję pacjentom i przekazuję
              zalecenia dotyczące codziennej pielęgnacji stóp.
            </p>
            <p className={styles.description}>
              Opowiem o znaczeniu prawidłowego odżywiania i bilansu wodnego, o
              wpływie różnych chorób na stan skóry i paznokci. Jak stosować
              witaminy i wiele innych zaleceń, aby utrzymać zdrowie stóp i ciała
              jako całości.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Kontakt</h3>
              <p className={styles.formDescription}>
                Skontaktuj się ze mną za pomocą poniższego formularza.
              </p>
            </div>

            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Imię i nazwisko*</label>
                <input
                  type="text"
                  {...register("name", { required: "To pole jest wymagane" })}
                  className={styles.input}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Numer telefonu*</label>
                <input
                  type="tel"
                  {...register("phone", { required: "To pole jest wymagane" })}
                  className={styles.input}
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Adres e-mail*</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "To pole jest wymagane",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Nieprawidłowy adres email",
                    },
                  })}
                  className={styles.input}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Wiadomość</label>
                <textarea
                  {...register("message", {
                    required: "To pole jest wymagane",
                  })}
                  className={styles.textarea}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message.message}</span>
                )}
              </div>
            </div>

            <button type="submit" className={styles.button}>
              Wyślij
            </button>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {currentYear} PodOS. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};
