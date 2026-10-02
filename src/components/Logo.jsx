// Three stacked blocks: the foundation (bottom) carries everything above it.
// Colored top to bottom like the Serbian flag: red, blue, white.
// The faint outline keeps the white block visible on light backgrounds.
export default function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity=".25">
        <rect x="4.5" y="22.5" width="23" height="5" rx="1.5" fill="var(--flag-white)" />
        <rect x="8.5" y="14.5" width="15" height="5" rx="1.5" fill="var(--flag-blue)" />
        <rect x="12.5" y="6.5" width="7" height="5" rx="1.5" fill="var(--flag-red)" />
      </g>
    </svg>
  );
}
