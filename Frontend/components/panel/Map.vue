<template>
    <div class="w-full">
      <div id="map" :style="{ width: '100%', height: '400px' }"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, watch } from "vue";
  
  const props = defineProps({
    location: { type: Number, required: true },
  });
  
  const [latitude, longitude] = props.location.split(",");

  let map, marker;
  
  onMounted(() => {
    // Inject Leaflet CSS and JS if not already loaded
    if (!document.querySelector('link[href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]')) {
      const leafletCSS = document.createElement("link");
      leafletCSS.rel = "stylesheet";
      leafletCSS.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      leafletCSS.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      leafletCSS.crossOrigin = "";
      document.head.appendChild(leafletCSS);
    }
  
    if (!document.querySelector('script[src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]')) {
      const leafletJS = document.createElement("script");
      leafletJS.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      leafletJS.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      leafletJS.crossOrigin = "";
      leafletJS.onload = initializeMap; // Call map initialization after script loads
      document.body.appendChild(leafletJS);
    } else {
      // Initialize the map immediately if the script is already loaded
      initializeMap();
    }
  });
  
  function initializeMap() {
    map = L.map("map").setView([parseFloat(latitude), parseFloat(longitude)], 13);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  
    // Add the marker with a popup
    marker = L.marker([latitude, longitude]).addTo(map);

  }
  
  // Watch for changes in latitude and longitude props to update the map
  watch(() => [props.location], ([newLocation]) => {
    // Update the map view and marker position
    const [newLatitude, newLongitude] = newLocation.split(",");
    if (map && marker) {
      map.setView([newLatitude, newLongitude]);
      marker.setLatLng([newLatitude, newLongitude]);
    }
  });
  </script>
  
  <style>
  /* Optional: Add some basic styling for the map container */
  #map {
    border-radius: 8px;
    overflow: hidden;
  }
  </style>
  