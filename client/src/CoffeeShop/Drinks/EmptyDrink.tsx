export default function EmptyDrink() {
  return (
    <svg
      width="230"
      height="139"
      viewBox="0 0 230 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_1)">
        <ellipse cx="115" cy="80.5" rx="111" ry="50.5" fill="#D0DFE4" />
      </g>
      <g filter="url(#filter1_i_0_1)">
        <ellipse cx="115" cy="76.5" rx="69" ry="31.5" fill="#D0DFE4" />
      </g>
      <path
        d="M178 27.3732C178 45.6305 173.64 62.2751 163.456 74.3405C153.298 86.3761 137.222 94 113.468 94C89.3487 94 73.5492 86.3745 63.7514 74.3537C53.9228 62.2951 50 45.6519 50 27.3732C50 18.3769 57.0655 12.2647 68.8461 8.37553C80.5773 4.50265 96.5676 3 113.468 3C131.155 3 147.41 4.50286 159.211 8.37555C171.053 12.2619 178 18.3718 178 27.3732Z"
        fill="#D9D9D9"
        stroke="#DBD9D9"
        stroke-width="2"
      />
      <g filter="url(#filter2_f_0_1)">
        <ellipse cx="114" cy="24.5" rx="62.5" ry="20.5" fill="white" />
      </g>
      <path
        d="M168 24C168 32.2843 144.271 39 115 39C85.7289 39 62 32.2843 62 24C62 15.7157 85.7289 9 115 9C144.271 9 168 15.7157 168 24Z"
        fill="url(#paint0_linear_0_1)"
        fill-opacity="0.35"
      />
      <defs>
        <filter
          id="filter0_d_0_1"
          x="0"
          y="30"
          width="230"
          height="109"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_0_1"
          x="46"
          y="45"
          width="138"
          height="67"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter
          id="filter2_f_0_1"
          x="47.5"
          y="0"
          width="133"
          height="49"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_1"
          x1="115"
          y1="9"
          x2="115"
          y2="39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.55" stop-color="#E3E3E3" />
          <stop offset="1" stop-color="#7D7D7D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
