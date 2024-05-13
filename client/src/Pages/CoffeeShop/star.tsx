export default function Star(props: { children: any }) {
  const { children } = props;
  return (
    <div className="star">
      <svg
        width="79"
        height="74"
        viewBox="0 0 79 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.5 0L48.5928 27.9848L78.0178 27.9848L54.2125 45.2804L63.3053 73.2652L39.5 55.9696L15.6947 73.2652L24.7875 45.2804L0.982212 27.9848L30.4072 27.9848L39.5 0Z"
          fill="#ECC78D"
        />
      </svg>
      <div className="balance-value">{children}</div>
    </div>
  );
}
