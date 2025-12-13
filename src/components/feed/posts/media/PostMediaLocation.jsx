import React from "react";
import { MapPin } from "lucide-react";

/**
 * PostMediaLocation - Location/Map display
 */
export default function PostMediaLocation({ location }) {
  const { name, address, coordinates, mapUrl } = location || {};

  return (
    <a
      href={
        mapUrl ||
        `https://maps.google.com/?q=${coordinates?.lat},${coordinates?.lng}`
      }
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-border rounded-xl overflow-hidden hover:border-foreground transition-colors"
    >
      {/* Map preview */}
      {coordinates && (
        <div className="aspect-video bg-muted relative">
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+000(${coordinates.lng},${coordinates.lat})/${coordinates.lng},${coordinates.lat},13/600x300@2x?access_token=YOUR_MAPBOX_TOKEN`}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Location info */}
      <div className="p-3 flex items-start gap-2">
        <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm">{name}</div>
          {address && (
            <div className="text-xs text-muted-foreground mt-0.5">
              {address}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
