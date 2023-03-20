import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DiningActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.40884 5.86198L5.22984 6.73698C6.29284 5.73998 6.38684 4.10398 5.44184 3.09298C4.92984 2.53998 4.99584 1.69898 5.59384 1.13798L4.77184 0.262978C3.69684 1.27198 3.60384 2.87398 4.56284 3.90998C5.05984 4.43998 4.99084 5.31598 4.40884 5.86198ZM12.4072 5.862L13.2282 6.737C14.2912 5.74 14.3852 4.103 13.4392 3.092C12.9272 2.539 12.9932 1.698 13.5912 1.137L12.7702 0.262001C11.6942 1.272 11.6022 2.873 12.5612 3.909C13.0582 4.44 12.9892 5.316 12.4072 5.862ZM8.40884 5.86198L9.22984 6.73698C10.2928 5.73998 10.3868 4.10298 9.44084 3.09198C8.92984 2.53998 8.99584 1.69898 9.59384 1.13798L8.77184 0.262978C7.69684 1.27198 7.60384 2.87398 8.56284 3.90998C9.05984 4.43998 8.99084 5.31598 8.40884 5.86198ZM0 8V9.001C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9.001V8H0Z"
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
          d="M4.40884 5.86198L5.22984 6.73698C6.29284 5.73998 6.38684 4.10398 5.44184 3.09298C4.92984 2.53998 4.99584 1.69898 5.59384 1.13798L4.77184 0.262978C3.69684 1.27198 3.60384 2.87398 4.56284 3.90998C5.05984 4.43998 4.99084 5.31598 4.40884 5.86198ZM12.4072 5.862L13.2282 6.737C14.2912 5.74 14.3852 4.103 13.4392 3.092C12.9272 2.539 12.9932 1.698 13.5912 1.137L12.7702 0.262001C11.6942 1.272 11.6022 2.873 12.5612 3.909C13.0582 4.44 12.9892 5.316 12.4072 5.862ZM8.40884 5.86198L9.22984 6.73698C10.2928 5.73998 10.3868 4.10298 9.44084 3.09198C8.92984 2.53998 8.99584 1.69898 9.59384 1.13798L8.77184 0.262978C7.69684 1.27198 7.60384 2.87398 8.56284 3.90998C9.05984 4.43998 8.99084 5.31598 8.40884 5.86198ZM0 8V9.001C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9.001V8H0Z"
        />
      </mask>
      <g mask="url(#mask0_1_2955)" />
    </svg>
  );
}

export { DiningActive };