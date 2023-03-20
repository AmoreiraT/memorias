import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function TouchSwipeRight(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.68508 0H4.27624L6.76243 2.48619L4.27624 4.97238H2.68508L4.47514 2.98343H0V1.98895H4.57459L2.68508 0ZM8.9496 2.48633C7.85567 2.48633 6.96065 3.38136 6.96065 4.47528V10.2432L6.56286 9.94489C6.16507 9.5471 5.66783 9.34821 5.07114 9.34821C4.57391 9.34821 4.07667 9.5471 3.77833 9.84544C2.98275 10.641 2.98275 11.9338 3.77833 12.7294L7.85567 16.8068C8.65125 17.6024 9.64573 18.0001 10.6402 18.0001H14.9164C16.6071 18.0001 17.8999 16.7073 17.8999 15.0167V10.7405C17.8999 9.94489 17.4026 9.24876 16.6071 8.85097L13.922 7.95594L10.9385 6.96147V4.47528C10.9385 3.38136 10.0435 2.48633 8.9496 2.48633ZM8.9496 3.6797C9.34739 3.6797 9.74518 4.07749 9.74518 4.47528V6.96147V7.85649L10.5408 8.15484L13.5242 9.14931L16.2093 10.0443C16.5076 10.1438 16.7065 10.4421 16.7065 10.7405V14.9173C16.7065 15.9117 15.9109 16.7073 14.9164 16.7073H10.6402C9.94407 16.7073 9.14849 16.409 8.65125 15.9117L4.57391 11.8344C4.37501 11.6355 4.37501 11.4366 4.37501 11.2377C4.37501 11.0388 4.47446 10.8399 4.67335 10.641C4.87225 10.4421 5.07114 10.4421 5.17059 10.4421C5.36949 10.4421 5.66783 10.5416 5.76728 10.7405L6.16507 11.1383L8.15402 13.1272V10.2432V4.47528C8.15402 4.07749 8.55181 3.6797 8.9496 3.6797Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.68508 0H4.27624L6.76243 2.48619L4.27624 4.97238H2.68508L4.47514 2.98343H0V1.98895H4.57459L2.68508 0ZM8.9496 2.48633C7.85567 2.48633 6.96065 3.38136 6.96065 4.47528V10.2432L6.56286 9.94489C6.16507 9.5471 5.66783 9.34821 5.07114 9.34821C4.57391 9.34821 4.07667 9.5471 3.77833 9.84544C2.98275 10.641 2.98275 11.9338 3.77833 12.7294L7.85567 16.8068C8.65125 17.6024 9.64573 18.0001 10.6402 18.0001H14.9164C16.6071 18.0001 17.8999 16.7073 17.8999 15.0167V10.7405C17.8999 9.94489 17.4026 9.24876 16.6071 8.85097L13.922 7.95594L10.9385 6.96147V4.47528C10.9385 3.38136 10.0435 2.48633 8.9496 2.48633ZM8.9496 3.6797C9.34739 3.6797 9.74518 4.07749 9.74518 4.47528V6.96147V7.85649L10.5408 8.15484L13.5242 9.14931L16.2093 10.0443C16.5076 10.1438 16.7065 10.4421 16.7065 10.7405V14.9173C16.7065 15.9117 15.9109 16.7073 14.9164 16.7073H10.6402C9.94407 16.7073 9.14849 16.409 8.65125 15.9117L4.57391 11.8344C4.37501 11.6355 4.37501 11.4366 4.37501 11.2377C4.37501 11.0388 4.47446 10.8399 4.67335 10.641C4.87225 10.4421 5.07114 10.4421 5.17059 10.4421C5.36949 10.4421 5.66783 10.5416 5.76728 10.7405L6.16507 11.1383L8.15402 13.1272V10.2432V4.47528C8.15402 4.07749 8.55181 3.6797 8.9496 3.6797Z"
        />
      </mask>
      <g mask="url(#mask0_1_1810)" />
    </svg>
  );
}

export { TouchSwipeRight };