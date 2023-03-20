import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function UserStaff(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.191 12.775C15.993 12.286 15.713 11.831 15.345 11.453C14.47 10.552 13.375 9.87 12.083 9.451L9.01 12.524L5.932 9.445C4.633 9.864 3.533 10.548 2.654 11.453C2.286 11.832 2.006 12.286 1.808 12.775L0 17.25H18L16.191 12.775ZM1.7793 16.0499L2.9213 13.2249C3.0703 12.8569 3.2693 12.5419 3.5143 12.2899C3.7453 12.0519 4.0073 11.8509 4.2723 11.6519L6.0503 16.0499H1.7793ZM8.40055 16.0498H7.34455L5.31055 11.0158C5.42055 10.9608 5.51655 10.8888 5.63055 10.8398L8.16355 13.3728L8.40055 13.6098V16.0498ZM9.59961 16.0502V13.6322L9.85861 13.3732L12.3846 10.8472C12.4986 10.8972 12.5946 10.9692 12.7046 11.0242L10.6736 16.0512H9.59961V16.0502ZM13.7418 11.6621C14.0008 11.8581 14.2587 12.0561 14.4848 12.2891C14.7298 12.5411 14.9297 12.8561 15.0787 13.2251L16.2207 16.0501H11.9688L13.7418 11.6621ZM9.01 9.25C11.459 9.25 12.5 6.952 12.5 4.891C12.5 2.751 11.479 0.75 9.01 0.75C6.541 0.75 5.5 2.732 5.5 4.891C5.5 7.011 6.52 9.25 9.01 9.25ZM9.00922 1.9502C11.0762 1.9502 11.2992 4.0072 11.2992 4.8912C11.2992 6.0642 10.8172 8.0502 9.00922 8.0502C6.81022 8.0502 6.69922 5.4192 6.69922 4.8912C6.69922 4.0072 6.92422 1.9502 9.00922 1.9502Z"
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
          d="M16.191 12.775C15.993 12.286 15.713 11.831 15.345 11.453C14.47 10.552 13.375 9.87 12.083 9.451L9.01 12.524L5.932 9.445C4.633 9.864 3.533 10.548 2.654 11.453C2.286 11.832 2.006 12.286 1.808 12.775L0 17.25H18L16.191 12.775ZM1.7793 16.0499L2.9213 13.2249C3.0703 12.8569 3.2693 12.5419 3.5143 12.2899C3.7453 12.0519 4.0073 11.8509 4.2723 11.6519L6.0503 16.0499H1.7793ZM8.40055 16.0498H7.34455L5.31055 11.0158C5.42055 10.9608 5.51655 10.8888 5.63055 10.8398L8.16355 13.3728L8.40055 13.6098V16.0498ZM9.59961 16.0502V13.6322L9.85861 13.3732L12.3846 10.8472C12.4986 10.8972 12.5946 10.9692 12.7046 11.0242L10.6736 16.0512H9.59961V16.0502ZM13.7418 11.6621C14.0008 11.8581 14.2587 12.0561 14.4848 12.2891C14.7298 12.5411 14.9297 12.8561 15.0787 13.2251L16.2207 16.0501H11.9688L13.7418 11.6621ZM9.01 9.25C11.459 9.25 12.5 6.952 12.5 4.891C12.5 2.751 11.479 0.75 9.01 0.75C6.541 0.75 5.5 2.732 5.5 4.891C5.5 7.011 6.52 9.25 9.01 9.25ZM9.00922 1.9502C11.0762 1.9502 11.2992 4.0072 11.2992 4.8912C11.2992 6.0642 10.8172 8.0502 9.00922 8.0502C6.81022 8.0502 6.69922 5.4192 6.69922 4.8912C6.69922 4.0072 6.92422 1.9502 9.00922 1.9502Z"
        />
      </mask>
      <g mask="url(#mask0_1_902)" />
    </svg>
  );
}

export { UserStaff };