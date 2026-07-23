export function openInGoogleMaps(placeOrUrl?: string, lat?: number, lng?: number) {
  let url = "";

  // If the first argument looks like a URL, open it directly (handles short links like maps.app.goo.gl/...)
  if (placeOrUrl && (placeOrUrl.startsWith("http:") || placeOrUrl.startsWith("https:"))) {
    url = placeOrUrl;
  } else if (placeOrUrl) {
    // Treat as a Google Maps place_id
    url = `https://www.google.com/maps/search/?api=1&query_place_id=${encodeURIComponent(placeOrUrl)}`;
  } else if (typeof lat === "number" && typeof lng === "number") {
    // Open by coordinates
    url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  } else {
    url = "https://www.google.com/maps";
  }

  window.open(url, "_blank", "noopener,noreferrer");
}
