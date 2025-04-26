declare global {
  interface Window {
    initMap: () => void;
  }
}

export const loadGoogleMaps = (apiKey: string): Promise<void> => {
  if (window.google) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    script.onload = () => resolve();

    document.head.appendChild(script);
  });
};
