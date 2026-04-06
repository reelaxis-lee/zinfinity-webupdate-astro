import { useState } from "react";
import zinfinityHandIcon from "@/assets/zinfinity-hand-icon.png";
import worldMapImage from "@/assets/world-map-blue.png";
import { getImageSrc } from "@/lib/utils";

export const locationData = [
  { name: "United States", country: "US", marker: "Americas", address: "550 Reserve Street Suite 190, Southlake, TX 76092" },
  { name: "United Kingdom", country: "UK", marker: "EMEA", address: "4/4A Bloomsbury Sq., London, UK WC1A 2RP" },
  { name: "Netherlands", country: "NL", marker: "EMEA", address: "Zinfinity BV Herengracht 420, 1017 BZ Amsterdam" },
  { name: "Australia", country: "AU", marker: "ANZ", address: "Ste 1, Level 3, 62 Lygon Street, Carlton South, VIC 3053" },
  { name: "Hong Kong", country: "HK", marker: "APAC", address: "Unit B17/F United CTR 95 Queensway, Admiralty, Hong Kong" },
];

const WorldMap = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  // Location marker positions (percentage-based for the map image)
  const markers = [
    { name: "Americas", x: 18.5, y: 45 },
    { name: "EMEA", x: 49.5, y: 30 },
    { name: "APAC", x: 77, y: 55 },
    { name: "ANZ", x: 88, y: 78 },
  ];

  // Coverage zones - larger regional areas
  const coverageZones = [
    { name: "Americas", x: 20, y: 45, width: 28, height: 35 },
    { name: "EMEA", x: 50, y: 35, width: 20, height: 30 },
    { name: "Asia Pacific", x: 80, y: 55, width: 25, height: 40 },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Map Image */}
      <img
        src={getImageSrc(worldMapImage)}
        alt="World map showing Zinfinity global presence"
        className="w-full h-auto"
      />

      {/* Coverage Zone Overlays */}
      {coverageZones.map((zone) => (
        <div
          key={zone.name}
          className="absolute pointer-events-none"
          style={{
            left: `${zone.x - zone.width / 2}%`,
            top: `${zone.y - zone.height / 2}%`,
            width: `${zone.width}%`,
            height: `${zone.height}%`,
          }}
        >
          <div 
            className="w-full h-full rounded-full opacity-20"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)',
            }}
          />
        </div>
      ))}

      {/* Connection Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Americas to EMEA */}
        <line x1="18.5" y1="45" x2="49.5" y2="30" stroke="hsl(var(--primary))" strokeWidth="0.15" strokeDasharray="0.5,0.5" />
        {/* EMEA to APAC */}
        <line x1="49.5" y1="30" x2="77" y2="55" stroke="hsl(var(--primary))" strokeWidth="0.15" strokeDasharray="0.5,0.5" />
        {/* APAC to ANZ */}
        <line x1="77" y1="55" x2="88" y2="78" stroke="hsl(var(--primary))" strokeWidth="0.15" strokeDasharray="0.5,0.5" />
        {/* Americas to APAC (Pacific route) */}
        <line x1="18.5" y1="45" x2="77" y2="55" stroke="hsl(var(--primary))" strokeWidth="0.1" strokeDasharray="0.5,0.5" opacity="0.5" />
      </svg>

      {/* Location Markers with Logo */}
      {markers.map((marker) => (
        <div
          key={marker.name}
          className="absolute cursor-pointer transition-all duration-300 hover:scale-125 z-10"
          style={{
            left: `${marker.x}%`,
            top: `${marker.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '9%',
            aspectRatio: '1',
          }}
          onMouseEnter={() => setHoveredMarker(marker.name)}
          onMouseLeave={() => setHoveredMarker(null)}
        >
          {/* Outer pulse ring */}
          <div 
            className="absolute rounded-full animate-ping opacity-40"
            style={{
              width: '140%',
              height: '140%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'hsl(var(--primary) / 0.3)',
              animationDuration: '2s',
            }}
          />
          
          {/* Glow background */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '130%',
              height: '130%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)',
            }}
          />

          {/* White background circle */}
          <div 
            className="absolute bg-background rounded-full shadow-xl border-2 border-primary/30"
            style={{
              width: '100%',
              height: '100%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Logo image */}
          <img
            src={getImageSrc(zinfinityHandIcon)}
            alt={`${marker.name} office`}
            className="absolute z-10"
            style={{
              width: '90%',
              height: '90%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
          />

          {/* Enhanced Tooltip on hover */}
          {hoveredMarker === marker.name && (
            <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 z-20 ${
              marker.y < 40 ? 'top-full mt-3' : 'bottom-full mb-3'
            }`}>
              {/* Arrow on top for below-tooltips */}
              {marker.y < 40 && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-1">
                  <div className="border-8 border-transparent border-b-card" />
                </div>
              )}
              <div className="bg-card text-card-foreground px-5 py-3 rounded-lg shadow-xl border border-border min-w-[200px]">
                {locationData
                  .filter((loc) => loc.marker === marker.name)
                  .map((loc) => (
                    <div key={loc.country} className="text-xs text-muted-foreground mb-1 last:mb-0">
                      <span className="font-semibold text-foreground">{loc.name}</span>
                      <br />
                      {loc.address}
                    </div>
                  ))}
              </div>
              {/* Arrow on bottom for above-tooltips */}
              {marker.y >= 40 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                  <div className="border-8 border-transparent border-t-card" />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
