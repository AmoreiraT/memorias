import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function AccountActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 6H1.5C0.675 6 0 6.675 0 7.5V16.5C0 17.325 0.675 18 1.5 18H16.5C17.325 18 18 17.325 18 16.5V7.5C18 6.675 17.325 6 16.5 6ZM5 12H3V10H5V12ZM16 4.2C16 3.537 15.463 3 14.8 3H3.2C2.537 3 2 3.537 2 4.2V4.5H16V4.2ZM14 1.2C14 0.537 13.463 0 12.8 0H5.2C4.537 0 4 0.537 4 1.2V1.5H14V1.2Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 6H1.5C0.675 6 0 6.675 0 7.5V16.5C0 17.325 0.675 18 1.5 18H16.5C17.325 18 18 17.325 18 16.5V7.5C18 6.675 17.325 6 16.5 6ZM5 12H3V10H5V12ZM16 4.2C16 3.537 15.463 3 14.8 3H3.2C2.537 3 2 3.537 2 4.2V4.5H16V4.2ZM14 1.2C14 0.537 13.463 0 12.8 0H5.2C4.537 0 4 0.537 4 1.2V1.5H14V1.2Z"
        />
      </mask>
      <g mask="url(#mask0_1_3583)" />
    </svg>
  );
}

export { AccountActive };
