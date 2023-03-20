import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function QRScan(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2 16V12H0V16C0 17.1 0.9 18 2 18H6V16.8H2C1.566 16.8 1.2 16.434 1.2 16ZM1.2 2C1.2 1.566 1.566 1.2 2 1.2H6V0H2C0.9 0 0 0.9 0 2V6H1.2V2ZM16.8 16C16.8 16.434 16.434 16.8 16 16.8H12V18H16C17.1 18 18 17.1 18 16V12H16.8V16ZM16 0H12V1.2H16C16.434 1.2 16.8 1.566 16.8 2V6H18V2C18 0.9 17.1 0 16 0ZM0 9.2H18V8H0V9.2Z"
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
          d="M1.2 16V12H0V16C0 17.1 0.9 18 2 18H6V16.8H2C1.566 16.8 1.2 16.434 1.2 16ZM1.2 2C1.2 1.566 1.566 1.2 2 1.2H6V0H2C0.9 0 0 0.9 0 2V6H1.2V2ZM16.8 16C16.8 16.434 16.434 16.8 16 16.8H12V18H16C17.1 18 18 17.1 18 16V12H16.8V16ZM16 0H12V1.2H16C16.434 1.2 16.8 1.566 16.8 2V6H18V2C18 0.9 17.1 0 16 0ZM0 9.2H18V8H0V9.2Z"
        />
      </mask>
      <g mask="url(#mask0_1_1475)" />
    </svg>
  );
}

export { QRScan };
