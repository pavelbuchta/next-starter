export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="8"
      viewBox="0 0 6 8"
      fill="none"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M1.495 0.75L4.995 4L1.495 7.25"
        stroke="#70757E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQArrow() {
  return (
    <svg
      aria-hidden
      role="presentation"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
        fill="white"
        className="fill-foreground"
      ></path>
    </svg>
  );
}

export function FAQLink() {
  return (
    <svg
      aria-hidden
      role="presentation"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="blue"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      className="h-4 w-4 stroke-ascend"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
      <path d="M15 3h6v6"></path>
      <path d="M10 14L21 3"></path>
    </svg>
  );
}

export function BadgeArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M7.31665 5.8335L9.64998 8.00016L7.31665 10.1668"
        stroke="#FCFDFF"
        strokeOpacity="0.937"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
