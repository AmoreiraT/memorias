import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Account(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 5H1.5C0.675 5 0 5.675 0 6.5V16.5C0 17.325 0.675 18 1.5 18H16.5C17.325 18 18 17.325 18 16.5V6.5C18 5.675 17.325 5 16.5 5ZM16.8 16.5C16.8 16.663 16.663 16.8 16.5 16.8H1.5C1.337 16.8 1.2 16.663 1.2 16.5V6.5C1.2 6.337 1.337 6.2 1.5 6.2H16.5C16.663 6.2 16.8 6.337 16.8 6.5V16.5ZM3 12H5V10H3V12ZM14.8 2.6H3.2C2.537 2.6 2 3.137 2 3.8H16C16 3.137 15.463 2.6 14.8 2.6ZM12.8 0H5.2C4.537 0 4 0.537 4 1.2H14C14 0.537 13.463 0 12.8 0Z"
      />
    </svg>
  );
}

export { Account };
