import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ProductsAndServicesActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 0.3V3.5H17.7L14.5 0.3ZM13 5V0H6V5.5H14C15.378 5.5 16.5 6.622 16.5 8V14H18V5H13ZM14 7H1C0.45 7 0 7.45 0 8V10H15V8C15 7.45 14.55 7 14 7ZM0 17C0 17.55 0.45 18 1 18H14C14.55 18 15 17.55 15 17V11.5H0V17ZM10 13H13V14.5H10V13Z"
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
          d="M14.5 0.3V3.5H17.7L14.5 0.3ZM13 5V0H6V5.5H14C15.378 5.5 16.5 6.622 16.5 8V14H18V5H13ZM14 7H1C0.45 7 0 7.45 0 8V10H15V8C15 7.45 14.55 7 14 7ZM0 17C0 17.55 0.45 18 1 18H14C14.55 18 15 17.55 15 17V11.5H0V17ZM10 13H13V14.5H10V13Z"
        />
      </mask>
      <g mask="url(#mask0_1_1922)" />
    </svg>
  );
}

export { ProductsAndServicesActive };
