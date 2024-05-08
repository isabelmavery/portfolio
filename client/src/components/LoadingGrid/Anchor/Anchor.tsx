import "./Anchor.css";

export default function Anchor(props: {
  href: string;
  ariaLabel: string;
  children: any;
  key?: string;
}) {
  const { href, ariaLabel, children, key } = props;
  return (
    <a className="primary-link" href={href} aria-label={ariaLabel} key={key}>
      {children}
    </a>
  );
}
