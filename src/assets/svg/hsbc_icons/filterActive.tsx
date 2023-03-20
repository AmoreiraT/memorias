import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FilterActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.23 12.5C4.205 12.5 3.327 13.118 2.941 14H0V16H2.941C3.327 16.882 4.205 17.5 5.23 17.5C6.255 17.5 7.133 16.882 7.519 16H18V14H7.519C7.133 13.118 6.255 12.5 5.23 12.5ZM7.519 2C7.133 1.118 6.255 0.5 5.23 0.5C4.205 0.5 3.327 1.118 2.941 2H0V4H2.941C3.327 4.882 4.205 5.5 5.23 5.5C6.255 5.5 7.133 4.882 7.519 4H18V2H7.519ZM12.77 6.5C11.745 6.5 10.867 7.118 10.481 8H0V10H10.481C10.867 10.882 11.745 11.5 12.77 11.5C13.795 11.5 14.673 10.882 15.059 10H18V8H15.059C14.673 7.118 13.795 6.5 12.77 6.5Z"
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
          d="M5.23 12.5C4.205 12.5 3.327 13.118 2.941 14H0V16H2.941C3.327 16.882 4.205 17.5 5.23 17.5C6.255 17.5 7.133 16.882 7.519 16H18V14H7.519C7.133 13.118 6.255 12.5 5.23 12.5ZM7.519 2C7.133 1.118 6.255 0.5 5.23 0.5C4.205 0.5 3.327 1.118 2.941 2H0V4H2.941C3.327 4.882 4.205 5.5 5.23 5.5C6.255 5.5 7.133 4.882 7.519 4H18V2H7.519ZM12.77 6.5C11.745 6.5 10.867 7.118 10.481 8H0V10H10.481C10.867 10.882 11.745 11.5 12.77 11.5C13.795 11.5 14.673 10.882 15.059 10H18V8H15.059C14.673 7.118 13.795 6.5 12.77 6.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_1591)" />
    </svg>
  );
}

export { FilterActive };
