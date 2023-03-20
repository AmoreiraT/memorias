import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ShoppingCartActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 14H4.361L5.169 12H14.564L18 3.5H2.294L1.283 1H0V1.026L4.156 11.307L3.067 14H2.5C1.672 14 1 14.671 1 15.5C1 16.329 1.672 17 2.5 17C3.328 17 4 16.329 4 15.5C4 15.397 3.99 15.297 3.97 15.2H13.531C13.511 15.297 13.501 15.397 13.501 15.5C13.501 16.329 14.173 17 15.001 17C15.829 17 16.501 16.329 16.501 15.5C16.501 14.671 15.828 14 15 14Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={18}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 14H4.361L5.169 12H14.564L18 3.5H2.294L1.283 1H0V1.026L4.156 11.307L3.067 14H2.5C1.672 14 1 14.671 1 15.5C1 16.329 1.672 17 2.5 17C3.328 17 4 16.329 4 15.5C4 15.397 3.99 15.297 3.97 15.2H13.531C13.511 15.297 13.501 15.397 13.501 15.5C13.501 16.329 14.173 17 15.001 17C15.829 17 16.501 16.329 16.501 15.5C16.501 14.671 15.828 14 15 14Z"
        />
      </mask>
      <g mask="url(#mask0_1_2749)" />
    </svg>
  );
}

export { ShoppingCartActive };
