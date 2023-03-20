import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function PaymentByAlias(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0H1V7H8V0ZM6.79922 5.8002H2.19922V1.2002H6.79922V5.8002ZM11 0V7H18V0H11ZM16.7992 5.8002H12.1992V1.2002H16.7992V5.8002ZM11 17H18V10H11V17ZM12.1992 11.2002H16.7992V15.8002H12.1992V11.2002V11.2002ZM5 8C2.239 8 0 10.239 0 13C0 15.761 2.239 18 5 18C7.761 18 10 15.761 10 13C10 10.239 7.761 8 5 8ZM4.99922 16.8002C2.90422 16.8002 1.19922 15.0952 1.19922 13.0002C1.19922 10.9052 2.90422 9.2002 4.99922 9.2002C7.09422 9.2002 8.79922 10.9052 8.79922 13.0002C8.79922 15.0952 7.09422 16.8002 4.99922 16.8002ZM2.5 12.652V14.349L4.4 12.449V15.6H5.6V12.449L7.5 14.349V12.652L5 10.151L2.5 12.652Z"
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
          d="M8 0H1V7H8V0ZM6.79922 5.8002H2.19922V1.2002H6.79922V5.8002ZM11 0V7H18V0H11ZM16.7992 5.8002H12.1992V1.2002H16.7992V5.8002ZM11 17H18V10H11V17ZM12.1992 11.2002H16.7992V15.8002H12.1992V11.2002V11.2002ZM5 8C2.239 8 0 10.239 0 13C0 15.761 2.239 18 5 18C7.761 18 10 15.761 10 13C10 10.239 7.761 8 5 8ZM4.99922 16.8002C2.90422 16.8002 1.19922 15.0952 1.19922 13.0002C1.19922 10.9052 2.90422 9.2002 4.99922 9.2002C7.09422 9.2002 8.79922 10.9052 8.79922 13.0002C8.79922 15.0952 7.09422 16.8002 4.99922 16.8002ZM2.5 12.652V14.349L4.4 12.449V15.6H5.6V12.449L7.5 14.349V12.652L5 10.151L2.5 12.652Z"
        />
      </mask>
      <g mask="url(#mask0_1_2799)" />
    </svg>
  );
}

export { PaymentByAlias };