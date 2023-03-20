import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactVirtualActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V18L4 14H18V0H0ZM4.25 8.25C3.56 8.25 3 7.69 3 7C3 6.31 3.56 5.75 4.25 5.75C4.94 5.75 5.5 6.31 5.5 7C5.5 7.69 4.94 8.25 4.25 8.25ZM9 8.25C8.31 8.25 7.75 7.69 7.75 7C7.75 6.31 8.31 5.75 9 5.75C9.69 5.75 10.25 6.31 10.25 7C10.25 7.69 9.69 8.25 9 8.25ZM13.75 8.25C13.06 8.25 12.5 7.69 12.5 7C12.5 6.31 13.06 5.75 13.75 5.75C14.44 5.75 15 6.31 15 7C15 7.69 14.44 8.25 13.75 8.25Z"
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
          d="M0 0V18L4 14H18V0H0ZM4.25 8.25C3.56 8.25 3 7.69 3 7C3 6.31 3.56 5.75 4.25 5.75C4.94 5.75 5.5 6.31 5.5 7C5.5 7.69 4.94 8.25 4.25 8.25ZM9 8.25C8.31 8.25 7.75 7.69 7.75 7C7.75 6.31 8.31 5.75 9 5.75C9.69 5.75 10.25 6.31 10.25 7C10.25 7.69 9.69 8.25 9 8.25ZM13.75 8.25C13.06 8.25 12.5 7.69 12.5 7C12.5 6.31 13.06 5.75 13.75 5.75C14.44 5.75 15 6.31 15 7C15 7.69 14.44 8.25 13.75 8.25Z"
        />
      </mask>
      <g mask="url(#mask0_1_758)" />
    </svg>
  );
}

export { ContactVirtualActive };
