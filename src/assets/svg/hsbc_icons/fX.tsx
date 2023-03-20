import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FX(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00078 0C5.86278 0 3.10878 1.611 1.50078 4.047V1.1L0.300781 2.3V6H4.00078L5.20078 4.8H2.44778C3.83678 2.641 6.24878 1.2 9.00078 1.2C13.3018 1.2 16.8008 4.699 16.8008 9C16.8008 9.62 16.7198 10.221 16.5828 10.8H17.8198C17.9378 10.218 18.0008 9.617 18.0008 9C18.0008 4.029 13.9718 0 9.00078 0ZM12.8 13.2H15.553C14.165 15.359 11.752 16.8 9 16.8C4.699 16.8 1.2 13.301 1.2 9C1.2 8.38 1.281 7.779 1.418 7.2H0.181C0.063 7.782 0 8.383 0 9C0 13.971 4.029 18 9 18C12.138 18 14.892 16.389 16.5 13.953V16.9L17.7 15.7V12H14L12.8 13.2ZM5.62244 13.2229L13.2224 5.6229L12.3734 4.7749L4.77344 12.3749L5.62244 13.2229ZM8.6 6.8C8.6 5.806 7.794 5 6.8 5C5.806 5 5 5.806 5 6.8C5 7.794 5.806 8.6 6.8 8.6C7.794 8.6 8.6 7.794 8.6 6.8ZM6.19922 6.8002C6.19922 6.4692 6.46822 6.2002 6.79922 6.2002C7.13022 6.2002 7.39922 6.4692 7.39922 6.8002C7.39922 7.1312 7.13022 7.4002 6.79922 7.4002C6.46822 7.4002 6.19922 7.1312 6.19922 6.8002ZM9.40039 11.1999C9.40039 12.1939 10.2064 12.9999 11.2004 12.9999C12.1944 12.9999 13.0004 12.1939 13.0004 11.1999C13.0004 10.2059 12.1944 9.3999 11.2004 9.3999C10.2064 9.3999 9.40039 10.2059 9.40039 11.1999ZM11.7996 11.2001C11.7996 11.5311 11.5306 11.8001 11.1996 11.8001C10.8686 11.8001 10.5996 11.5311 10.5996 11.2001C10.5996 10.8691 10.8686 10.6001 11.1996 10.6001C11.5306 10.6001 11.7996 10.8691 11.7996 11.2001Z"
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
          d="M9.00078 0C5.86278 0 3.10878 1.611 1.50078 4.047V1.1L0.300781 2.3V6H4.00078L5.20078 4.8H2.44778C3.83678 2.641 6.24878 1.2 9.00078 1.2C13.3018 1.2 16.8008 4.699 16.8008 9C16.8008 9.62 16.7198 10.221 16.5828 10.8H17.8198C17.9378 10.218 18.0008 9.617 18.0008 9C18.0008 4.029 13.9718 0 9.00078 0ZM12.8 13.2H15.553C14.165 15.359 11.752 16.8 9 16.8C4.699 16.8 1.2 13.301 1.2 9C1.2 8.38 1.281 7.779 1.418 7.2H0.181C0.063 7.782 0 8.383 0 9C0 13.971 4.029 18 9 18C12.138 18 14.892 16.389 16.5 13.953V16.9L17.7 15.7V12H14L12.8 13.2ZM5.62244 13.2229L13.2224 5.6229L12.3734 4.7749L4.77344 12.3749L5.62244 13.2229ZM8.6 6.8C8.6 5.806 7.794 5 6.8 5C5.806 5 5 5.806 5 6.8C5 7.794 5.806 8.6 6.8 8.6C7.794 8.6 8.6 7.794 8.6 6.8ZM6.19922 6.8002C6.19922 6.4692 6.46822 6.2002 6.79922 6.2002C7.13022 6.2002 7.39922 6.4692 7.39922 6.8002C7.39922 7.1312 7.13022 7.4002 6.79922 7.4002C6.46822 7.4002 6.19922 7.1312 6.19922 6.8002ZM9.40039 11.1999C9.40039 12.1939 10.2064 12.9999 11.2004 12.9999C12.1944 12.9999 13.0004 12.1939 13.0004 11.1999C13.0004 10.2059 12.1944 9.3999 11.2004 9.3999C10.2064 9.3999 9.40039 10.2059 9.40039 11.1999ZM11.7996 11.2001C11.7996 11.5311 11.5306 11.8001 11.1996 11.8001C10.8686 11.8001 10.5996 11.5311 10.5996 11.2001C10.5996 10.8691 10.8686 10.6001 11.1996 10.6001C11.5306 10.6001 11.7996 10.8691 11.7996 11.2001Z"
        />
      </mask>
      <g mask="url(#mask0_1_1573)" />
    </svg>
  );
}

export { FX };