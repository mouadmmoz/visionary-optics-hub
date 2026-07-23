export function openInGoogleMaps(placeId?: string, lat?: number, lng?: number) {
  let url = "";
  if (placeId) {
    // Ouvre la fiche du lieu (affiche aussi les avis)
    url = `https://www.google.com/maps/search/?api=1&query_place_id=${encodeURIComponent(placeId)}`;
  } else if (typeof lat === "number" && typeof lng === "number") {
    // Ouvre par coordonnées
    url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  } else {
    url = "https://www.google.com/maps";
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
