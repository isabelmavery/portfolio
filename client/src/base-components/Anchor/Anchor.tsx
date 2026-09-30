import "./Anchor.css";

export default function Anchor(props: {
  href: string;
  ariaLabel: string;
  children: any;
  key?: string;
  download?: boolean;
}) {
  const { href, ariaLabel, children, key, download } = props;
  return (
    <a
      className="primary-link"
      href={href}
      aria-label={ariaLabel}
      key={key}
      download={download}
    >
      {children}
    </a>
  );
}
