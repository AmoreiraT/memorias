import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactPhoneActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6106 13.3072L14.8846 10.5812C14.3816 10.0772 13.5026 10.0782 13.0006 10.5802L11.5186 12.0622C11.4726 12.1082 11.3986 12.1162 11.3516 12.0792C10.6216 11.5172 9.92256 10.9012 9.27356 10.2532L7.74856 8.72818C7.09556 8.07418 6.48056 7.37518 5.92056 6.64918C5.88456 6.60218 5.89256 6.52818 5.93856 6.48218L7.42056 5.00018C7.93956 4.48118 7.93956 3.63618 7.42056 3.11618L4.69456 0.391184C4.19156 -0.112816 3.31356 -0.112816 2.80956 0.391184L0.816557 2.38518C-0.0214432 3.22318 -0.236443 4.51318 0.281557 5.59518C2.16056 9.51918 5.32856 12.4522 5.42656 12.5392C5.54956 12.6732 8.48256 15.8392 12.4056 17.7192C12.7986 17.9072 13.2196 17.9992 13.6356 17.9992C14.3646 17.9992 15.0816 17.7182 15.6156 17.1842L17.6086 15.1912C17.8616 14.9392 18.0006 14.6052 18.0006 14.2502C18.0006 13.8942 17.8626 13.5592 17.6106 13.3072Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={19}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6106 13.3072L14.8846 10.5812C14.3816 10.0772 13.5026 10.0782 13.0006 10.5802L11.5186 12.0622C11.4726 12.1082 11.3986 12.1162 11.3516 12.0792C10.6216 11.5172 9.92256 10.9012 9.27356 10.2532L7.74856 8.72818C7.09556 8.07418 6.48056 7.37518 5.92056 6.64918C5.88456 6.60218 5.89256 6.52818 5.93856 6.48218L7.42056 5.00018C7.93956 4.48118 7.93956 3.63618 7.42056 3.11618L4.69456 0.391184C4.19156 -0.112816 3.31356 -0.112816 2.80956 0.391184L0.816557 2.38518C-0.0214432 3.22318 -0.236443 4.51318 0.281557 5.59518C2.16056 9.51918 5.32856 12.4522 5.42656 12.5392C5.54956 12.6732 8.48256 15.8392 12.4056 17.7192C12.7986 17.9072 13.2196 17.9992 13.6356 17.9992C14.3646 17.9992 15.0816 17.7182 15.6156 17.1842L17.6086 15.1912C17.8616 14.9392 18.0006 14.6052 18.0006 14.2502C18.0006 13.8942 17.8626 13.5592 17.6106 13.3072Z"
        />
      </mask>
      <g mask="url(#mask0_1_1177)" />
    </svg>
  );
}

export { ContactPhoneActive };