export const FireIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_5_19)">
        <path
          d="M9.92687 34.6878C11.3925 35.9156 13.1283 36.7786 14.9919 37.2061C15.1702 37.2645 15.2902 37.0311 15.1702 36.9145C11.1785 33.1061 13.3719 28.9845 14.9919 27.1261C16.1469 25.7995 17.7919 23.6144 17.6719 20.6844C17.6719 20.3911 17.9719 20.1561 18.2085 20.3328C20.4735 21.5044 22.0219 24.0828 22.4385 26.1911C23.0952 25.5478 23.3335 24.5511 23.3335 23.6728C23.3335 23.3794 23.6902 23.1444 23.9885 23.3794C26.1335 25.3128 29.8269 31.8745 23.8685 37.0294C23.7502 37.1478 23.8685 37.3828 23.9885 37.3245C25.7952 36.8508 27.4943 36.035 28.9935 34.9211C38.7052 27.4211 32.3885 14.1211 28.2769 9.72778C27.7419 9.19945 26.7885 9.55112 26.7885 10.3128C26.7285 11.8961 26.2519 13.6528 25.0019 14.8244C24.0485 10.8411 20.8719 6.31612 16.3435 4.08945C15.7485 3.79612 15.0335 4.26445 15.0935 4.90945C15.2102 10.3594 11.6552 13.8294 8.55687 18.3411C5.81521 22.3828 4.02854 29.8244 9.92687 34.6878Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_5_19"
          x="6"
          y="4"
          width="28.1241"
          height="37.3336"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          />
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
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_5_19"
          />
        </filter>
      </defs>
    </svg>
  )
}
