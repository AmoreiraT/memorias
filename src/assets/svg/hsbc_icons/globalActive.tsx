import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function GlobalActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9608 8.24976H14.7068C14.5048 4.69776 12.9048 1.67676 10.6348 0.155762C14.5828 0.881762 17.6238 4.17876 17.9608 8.24976ZM8.24911 8.24976V1.34376C6.34511 2.56176 4.98811 5.16376 4.79311 8.24976H8.24911ZM8.24911 9.74976V16.6558C6.34511 15.4378 4.98811 12.8348 4.79311 9.74976H8.24911ZM9.75 16.656V9.75H13.206C13.011 12.835 11.654 15.438 9.75 16.656ZM14.7068 9.75C14.5048 13.302 12.9048 16.323 10.6348 17.844C14.5828 17.118 17.6238 13.821 17.9608 9.75H14.7068ZM0.0371094 9.74976H3.29111C3.49311 13.3018 5.09311 16.3228 7.36311 17.8438C3.41511 17.1178 0.374109 13.8208 0.0371094 9.74976ZM9.75 1.34375V8.24975H13.206C13.011 5.16375 11.654 2.56175 9.75 1.34375ZM7.36311 0.155762C5.09311 1.67676 3.49311 4.69776 3.29111 8.24976H0.0371094C0.374109 4.17876 3.41511 0.881762 7.36311 0.155762Z"
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
          d="M17.9608 8.24976H14.7068C14.5048 4.69776 12.9048 1.67676 10.6348 0.155762C14.5828 0.881762 17.6238 4.17876 17.9608 8.24976ZM8.24911 8.24976V1.34376C6.34511 2.56176 4.98811 5.16376 4.79311 8.24976H8.24911ZM8.24911 9.74976V16.6558C6.34511 15.4378 4.98811 12.8348 4.79311 9.74976H8.24911ZM9.75 16.656V9.75H13.206C13.011 12.835 11.654 15.438 9.75 16.656ZM14.7068 9.75C14.5048 13.302 12.9048 16.323 10.6348 17.844C14.5828 17.118 17.6238 13.821 17.9608 9.75H14.7068ZM0.0371094 9.74976H3.29111C3.49311 13.3018 5.09311 16.3228 7.36311 17.8438C3.41511 17.1178 0.374109 13.8208 0.0371094 9.74976ZM9.75 1.34375V8.24975H13.206C13.011 5.16375 11.654 2.56175 9.75 1.34375ZM7.36311 0.155762C5.09311 1.67676 3.49311 4.69776 3.29111 8.24976H0.0371094C0.374109 4.17876 3.41511 0.881762 7.36311 0.155762Z"
        />
      </mask>
      <g mask="url(#mask0_1_1515)" />
    </svg>
  );
}

export { GlobalActive };