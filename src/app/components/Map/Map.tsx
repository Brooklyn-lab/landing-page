"use client";

/// <reference types="@types/google.maps" />

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Map.module.scss";
import { loadGoogleMaps } from "@/app/utils/googleMaps";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadGoogleMaps(GOOGLE_MAPS_API_KEY);

        if (!mapRef.current || !window.google) return;

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 51.119926, lng: 17.0158 },
          zoom: 15,
          disableDefaultUI: true,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text",
              stylers: [{ color: "#878787" }],
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [{ color: "#a7a7a7" }],
            },
          ],
        });

        new google.maps.Marker({
          position: { lat: 51.119926, lng: 17.0158 },
          map,
          title: "Gabinet PodOS",
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, []);

  return (
    <section className={styles.map} id="address">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ADRES</h2>
          <div className={styles.addressInfo}>
            <p>53-680 Wrocław, ul. Braniborska 61/13</p>
            <p>
              (budynek Legnicka Residence, 2 piętro, Gabinet przy studii
              &quot;Pracownia fryzur&quot;)
            </p>
            <p className={styles.additional}>
              <span>Dodatkowo:</span>
              <br />- parking
              <br />- możliwość wjazdu osób niepełnosprawnych
            </p>
          </div>
        </div>

        <div ref={mapRef} className={styles.mapContainer} />

        <div className={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              src="/images/social/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              src="/images/social/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
