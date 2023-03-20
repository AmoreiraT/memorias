import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function UserActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.191 13.025C15.993 12.536 15.713 12.081 15.345 11.703C14.47 10.802 13.375 10.12 12.083 9.701L9.01 12.774L5.931 9.695C4.632 10.114 3.532 10.798 2.653 11.703C2.285 12.081 2.005 12.536 1.808 13.025L0 17.5H18L16.191 13.025ZM9.01 9C11.459 9 12.5 6.702 12.5 4.641C12.5 2.501 11.479 0.5 9.01 0.5C6.541 0.5 5.5 2.481 5.5 4.641C5.5 6.761 6.52 9 9.01 9Z"
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
          d="M16.191 13.025C15.993 12.536 15.713 12.081 15.345 11.703C14.47 10.802 13.375 10.12 12.083 9.701L9.01 12.774L5.931 9.695C4.632 10.114 3.532 10.798 2.653 11.703C2.285 12.081 2.005 12.536 1.808 13.025L0 17.5H18L16.191 13.025ZM9.01 9C11.459 9 12.5 6.702 12.5 4.641C12.5 2.501 11.479 0.5 9.01 0.5C6.541 0.5 5.5 2.481 5.5 4.641C5.5 6.761 6.52 9 9.01 9Z"
        />
      </mask>
      <g mask="url(#mask0_1_868)" />
    </svg>
  );
}

export { UserActive };
