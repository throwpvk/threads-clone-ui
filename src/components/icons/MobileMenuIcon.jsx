export default function MobileMenuIcon({
  className = "",
  size = 24,
  ...props
}) {
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
      <rect
        fill="currentColor"
        height="2.5"
        rx="1.25"
        width="22"
        x="-1"
        y="7"
      />
      <rect
        fill="currentColor"
        height="2.5"
        rx="1.25"
        width="14"
        x="7"
        y="15"
      />
    </svg>
  );
}
