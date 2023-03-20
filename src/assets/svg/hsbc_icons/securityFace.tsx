import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SecurityFace(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2 16V12H0V16C0 17.1 0.9 18 2 18H6V16.8H2C1.566 16.8 1.2 16.434 1.2 16ZM1.2 2C1.2 1.566 1.566 1.2 2 1.2H6V0H2C0.9 0 0 0.9 0 2V6H1.2V2ZM16.8 16C16.8 16.434 16.434 16.8 16 16.8H12V18H16C17.1 18 18 17.1 18 16V12H16.8V16ZM16 0H12V1.2H16C16.434 1.2 16.8 1.566 16.8 2V6H18V2C18 0.9 17.1 0 16 0ZM5 6C5 6.552 5.448 7 6 7C6.552 7 7 6.552 7 6C7 5.448 6.552 5 6 5C5.448 5 5 5.448 5 6ZM12 7C12.552 7 13 6.552 13 6C13 5.448 12.552 5 12 5C11.448 5 11 5.448 11 6C11 6.552 11.448 7 12 7ZM11.5977 11.3872C10.1477 12.6942 7.85166 12.6942 6.40166 11.3872L5.59766 12.2782C6.54366 13.1312 7.75166 13.6002 8.99966 13.6002C10.2477 13.6002 11.4557 13.1312 12.4017 12.2782L11.5977 11.3872Z"
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
          d="M1.2 16V12H0V16C0 17.1 0.9 18 2 18H6V16.8H2C1.566 16.8 1.2 16.434 1.2 16ZM1.2 2C1.2 1.566 1.566 1.2 2 1.2H6V0H2C0.9 0 0 0.9 0 2V6H1.2V2ZM16.8 16C16.8 16.434 16.434 16.8 16 16.8H12V18H16C17.1 18 18 17.1 18 16V12H16.8V16ZM16 0H12V1.2H16C16.434 1.2 16.8 1.566 16.8 2V6H18V2C18 0.9 17.1 0 16 0ZM5 6C5 6.552 5.448 7 6 7C6.552 7 7 6.552 7 6C7 5.448 6.552 5 6 5C5.448 5 5 5.448 5 6ZM12 7C12.552 7 13 6.552 13 6C13 5.448 12.552 5 12 5C11.448 5 11 5.448 11 6C11 6.552 11.448 7 12 7ZM11.5977 11.3872C10.1477 12.6942 7.85166 12.6942 6.40166 11.3872L5.59766 12.2782C6.54366 13.1312 7.75166 13.6002 8.99966 13.6002C10.2477 13.6002 11.4557 13.1312 12.4017 12.2782L11.5977 11.3872Z"
        />
      </mask>
      <g mask="url(#mask0_1_529)" />
    </svg>
  );
}

export { SecurityFace };