import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function TradeActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.602 13.255L5.283 15.574L7.586 17.877C3.289 17.198 0 13.487 0 8.999C0 4.295 3.611 0.439001 8.211 0.0390015L10.596 2.425L8.466 4.554C6.236 4.821 4.5 6.698 4.5 9C4.5 10.994 5.806 12.665 7.602 13.255ZM12.7163 2.42403L10.4133 0.121033C14.7103 0.801033 17.9993 4.51103 17.9993 8.99903C17.9993 13.703 14.3893 17.559 9.7893 17.959L7.4043 15.574L9.5323 13.446C11.7633 13.18 13.4993 11.303 13.4993 9.00003C13.4993 7.00503 12.1933 5.33303 10.3973 4.74303L12.7163 2.42403Z"
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
          d="M7.602 13.255L5.283 15.574L7.586 17.877C3.289 17.198 0 13.487 0 8.999C0 4.295 3.611 0.439001 8.211 0.0390015L10.596 2.425L8.466 4.554C6.236 4.821 4.5 6.698 4.5 9C4.5 10.994 5.806 12.665 7.602 13.255ZM12.7163 2.42403L10.4133 0.121033C14.7103 0.801033 17.9993 4.51103 17.9993 8.99903C17.9993 13.703 14.3893 17.559 9.7893 17.959L7.4043 15.574L9.5323 13.446C11.7633 13.18 13.4993 11.303 13.4993 9.00003C13.4993 7.00503 12.1933 5.33303 10.3973 4.74303L12.7163 2.42403Z"
        />
      </mask>
      <g mask="url(#mask0_1_1379)" />
    </svg>
  );
}

export { TradeActive };