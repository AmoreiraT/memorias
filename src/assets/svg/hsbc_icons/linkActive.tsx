import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function LinkActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00625 12.585L6.24725 15.344C5.82425 15.768 5.26225 16 4.66525 16C4.06825 16 3.50625 15.768 3.08425 15.345L2.65625 14.917C2.23325 14.494 2.00025 13.933 2.00025 13.335C2.00025 12.738 2.23325 12.176 2.65525 11.753L5.65925 8.75C6.11225 8.344 6.97525 7.72 8.33725 8.049C8.33725 8.049 8.93225 8.169 9.43225 8.495C10.0243 8.881 10.7803 9.043 11.3523 8.705C11.1652 8.37 10.9483 8.048 10.6643 7.764L10.2362 7.336C9.40925 6.508 8.32425 6.095 7.24025 6.095C6.15625 6.095 5.07225 6.508 4.24525 7.336L1.24125 10.339C-0.41375 11.993 -0.41375 14.676 1.24125 16.331L1.66925 16.759C2.49625 17.586 3.58125 18 4.66525 18C5.74925 18 6.83425 17.586 7.66125 16.759L10.6652 13.755C10.9392 13.481 11.1513 13.172 11.3343 12.85C11.1433 12.871 10.9552 12.905 10.7603 12.905C10.1503 12.905 9.56325 12.784 9.00625 12.585ZM16.7593 1.669L16.3312 1.241C15.5043 0.414 14.4193 0 13.3352 0C12.2512 0 11.1663 0.414 10.3393 1.241L7.33625 4.245C7.06125 4.519 6.85025 4.828 6.66625 5.15C6.85725 5.128 7.04525 5.095 7.24025 5.095C7.84925 5.095 8.43625 5.217 8.99425 5.415L11.7533 2.656C12.1762 2.232 12.7382 2 13.3352 2C13.9323 2 14.4942 2.232 14.9162 2.655L15.3443 3.083C15.7673 3.506 16.0003 4.067 16.0003 4.665C16.0003 5.262 15.7672 5.824 15.3452 6.247L12.3412 9.25C11.8882 9.656 11.0252 10.28 9.66325 9.951C9.66325 9.951 9.06825 9.831 8.56825 9.505C7.97625 9.119 7.22025 8.957 6.64825 9.295C6.83525 9.63 7.05225 9.952 7.33625 10.236L7.76425 10.664C8.59125 11.492 9.67625 11.905 10.7603 11.905C11.8443 11.905 12.9282 11.491 13.7562 10.664L16.7603 7.661C18.4143 6.006 18.4142 3.324 16.7593 1.669Z"
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
          d="M9.00625 12.585L6.24725 15.344C5.82425 15.768 5.26225 16 4.66525 16C4.06825 16 3.50625 15.768 3.08425 15.345L2.65625 14.917C2.23325 14.494 2.00025 13.933 2.00025 13.335C2.00025 12.738 2.23325 12.176 2.65525 11.753L5.65925 8.75C6.11225 8.344 6.97525 7.72 8.33725 8.049C8.33725 8.049 8.93225 8.169 9.43225 8.495C10.0243 8.881 10.7803 9.043 11.3523 8.705C11.1652 8.37 10.9483 8.048 10.6643 7.764L10.2362 7.336C9.40925 6.508 8.32425 6.095 7.24025 6.095C6.15625 6.095 5.07225 6.508 4.24525 7.336L1.24125 10.339C-0.41375 11.993 -0.41375 14.676 1.24125 16.331L1.66925 16.759C2.49625 17.586 3.58125 18 4.66525 18C5.74925 18 6.83425 17.586 7.66125 16.759L10.6652 13.755C10.9392 13.481 11.1513 13.172 11.3343 12.85C11.1433 12.871 10.9552 12.905 10.7603 12.905C10.1503 12.905 9.56325 12.784 9.00625 12.585ZM16.7593 1.669L16.3312 1.241C15.5043 0.414 14.4193 0 13.3352 0C12.2512 0 11.1663 0.414 10.3393 1.241L7.33625 4.245C7.06125 4.519 6.85025 4.828 6.66625 5.15C6.85725 5.128 7.04525 5.095 7.24025 5.095C7.84925 5.095 8.43625 5.217 8.99425 5.415L11.7533 2.656C12.1762 2.232 12.7382 2 13.3352 2C13.9323 2 14.4942 2.232 14.9162 2.655L15.3443 3.083C15.7673 3.506 16.0003 4.067 16.0003 4.665C16.0003 5.262 15.7672 5.824 15.3452 6.247L12.3412 9.25C11.8882 9.656 11.0252 10.28 9.66325 9.951C9.66325 9.951 9.06825 9.831 8.56825 9.505C7.97625 9.119 7.22025 8.957 6.64825 9.295C6.83525 9.63 7.05225 9.952 7.33625 10.236L7.76425 10.664C8.59125 11.492 9.67625 11.905 10.7603 11.905C11.8443 11.905 12.9282 11.491 13.7562 10.664L16.7603 7.661C18.4143 6.006 18.4142 3.324 16.7593 1.669Z"
        />
      </mask>
      <g mask="url(#mask0_1_3343)" />
    </svg>
  );
}

export { LinkActive };
