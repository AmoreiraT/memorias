import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SecurityEntitlements(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1004 3.20001C14.1004 4.70001 13.3004 6.40001 11.5004 6.40001C9.70039 6.40001 8.90039 4.80001 8.90039 3.20001C8.90039 1.00001 10.2004 0.200012 11.5004 0.200012C12.8004 0.200012 14.1004 1.00001 14.1004 3.20001ZM13 3.20011C13 1.50011 12 1.30011 11.5 1.30011C10.9 1.30011 10 1.50011 10 3.20011C10 3.60011 10.1 5.30011 11.5 5.30011C12.7 5.30011 13 4.00011 13 3.20011ZM4.9 18C2.1 17.2 0 14.6 0 11.5V9.10001H9.9V11.5C9.9 14.6 7.8 17.2 4.9 18ZM8.69961 10.3002H1.19961H1.09961V11.3002C1.09961 13.7002 2.69961 15.9002 4.89961 16.7002C7.19961 15.9002 8.69961 13.7002 8.69961 11.3002V10.3002ZM16.0996 7.70011C16.2996 8.00011 16.4996 8.30011 16.6996 8.70011L17.9996 12.1001H10.8996V11.0001H16.3996L15.6996 9.20011C15.5996 9.00011 15.4996 8.80011 15.2996 8.60011C14.8996 8.20011 14.3996 7.80011 13.8996 7.60011L11.4996 10.0001L9.09961 7.60011C8.79961 7.70011 8.49961 7.90011 8.19961 8.10011H6.59961C6.69961 8.00011 6.79961 7.90011 6.89961 7.70011C7.59961 7.10011 8.29961 6.60011 9.19961 6.30011H9.29961L11.4996 8.40011L13.5996 6.30011H13.6996C14.6996 6.60011 15.4996 7.00011 16.0996 7.70011Z"
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
          d="M14.1004 3.20001C14.1004 4.70001 13.3004 6.40001 11.5004 6.40001C9.70039 6.40001 8.90039 4.80001 8.90039 3.20001C8.90039 1.00001 10.2004 0.200012 11.5004 0.200012C12.8004 0.200012 14.1004 1.00001 14.1004 3.20001ZM13 3.20011C13 1.50011 12 1.30011 11.5 1.30011C10.9 1.30011 10 1.50011 10 3.20011C10 3.60011 10.1 5.30011 11.5 5.30011C12.7 5.30011 13 4.00011 13 3.20011ZM4.9 18C2.1 17.2 0 14.6 0 11.5V9.10001H9.9V11.5C9.9 14.6 7.8 17.2 4.9 18ZM8.69961 10.3002H1.19961H1.09961V11.3002C1.09961 13.7002 2.69961 15.9002 4.89961 16.7002C7.19961 15.9002 8.69961 13.7002 8.69961 11.3002V10.3002ZM16.0996 7.70011C16.2996 8.00011 16.4996 8.30011 16.6996 8.70011L17.9996 12.1001H10.8996V11.0001H16.3996L15.6996 9.20011C15.5996 9.00011 15.4996 8.80011 15.2996 8.60011C14.8996 8.20011 14.3996 7.80011 13.8996 7.60011L11.4996 10.0001L9.09961 7.60011C8.79961 7.70011 8.49961 7.90011 8.19961 8.10011H6.59961C6.69961 8.00011 6.79961 7.90011 6.89961 7.70011C7.59961 7.10011 8.29961 6.60011 9.19961 6.30011H9.29961L11.4996 8.40011L13.5996 6.30011H13.6996C14.6996 6.60011 15.4996 7.00011 16.0996 7.70011Z"
        />
      </mask>
      <g mask="url(#mask0_1_557)" />
    </svg>
  );
}

export { SecurityEntitlements };