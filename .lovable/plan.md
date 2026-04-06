

## Plan: Remove Region Name from Map Tooltips

Remove the region header (e.g., "Americas", "EMEA", "APAC", "ANZ") from the map marker hover tooltips, keeping only the country name and address.

### Change
**`src/components/WorldMap.tsx`** (line 151): Delete the `<div>` that renders `{marker.name}` as the tooltip header.

