export default function MenuIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      aria-label="More"
      role="img"
      viewBox="0 0 24 24"
      className={className}
      style={{
        fill: "currentColor",
        height: `${size}px`,
        width: `${size}px`,
      }}
      {...props}
    >
      <rect fill="currentColor" height="2" rx="1.25" width="18" x="3" y="7" />
      <rect fill="currentColor" height="2" rx="1.25" width="12" x="3" y="14" />
    </svg>
  );
}
