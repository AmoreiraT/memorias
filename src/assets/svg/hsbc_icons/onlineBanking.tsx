import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function OnlineBanking(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 13.5V2.5C17 1.395 16.104 0.5 15 0.5H3C1.896 0.5 1 1.395 1 2.5V13.5H0V15.5C0 16.605 0.896 17.5 2 17.5H16C17.104 17.5 18 16.605 18 15.5V13.5H17ZM2.19922 2.5002C2.19922 2.0592 2.55822 1.7002 2.99922 1.7002H14.9992C15.4402 1.7002 15.7992 2.0592 15.7992 2.5002V13.5002H2.19922V2.5002ZM16.7992 15.5002C16.7992 15.9412 16.4402 16.3002 15.9992 16.3002H1.99922C1.55822 16.3002 1.19922 15.9412 1.19922 15.5002V14.7002H16.7992V15.5002ZM7 4.5V9.139L8.031 8.623L9.031 10.621L10.68 9.795L9.68 7.798L10.711 7.282L7 4.5Z"
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
          d="M17 13.5V2.5C17 1.395 16.104 0.5 15 0.5H3C1.896 0.5 1 1.395 1 2.5V13.5H0V15.5C0 16.605 0.896 17.5 2 17.5H16C17.104 17.5 18 16.605 18 15.5V13.5H17ZM2.19922 2.5002C2.19922 2.0592 2.55822 1.7002 2.99922 1.7002H14.9992C15.4402 1.7002 15.7992 2.0592 15.7992 2.5002V13.5002H2.19922V2.5002ZM16.7992 15.5002C16.7992 15.9412 16.4402 16.3002 15.9992 16.3002H1.99922C1.55822 16.3002 1.19922 15.9412 1.19922 15.5002V14.7002H16.7992V15.5002ZM7 4.5V9.139L8.031 8.623L9.031 10.621L10.68 9.795L9.68 7.798L10.711 7.282L7 4.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_2839)" />
    </svg>
  );
}

export { OnlineBanking };
