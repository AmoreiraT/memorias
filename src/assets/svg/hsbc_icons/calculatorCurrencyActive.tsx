import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function CalculatorCurrencyActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.8C4.699 16.8 1.2 13.301 1.2 9C1.2 8.487 1.253 7.986 1.348 7.5H0.131C0.047 7.987 0 8.488 0 9C0 13.971 4.029 18 9 18C12.132 18 14.888 16.398 16.5 13.971V16.9L17.7 15.7V12H16.198C15.02 14.815 12.238 16.8 9 16.8ZM9.00078 0C5.86878 0 3.11278 1.602 1.50078 4.029V1.1L0.300781 2.3V6H1.80278C2.98078 3.184 5.76278 1.2 9.00078 1.2C13.3018 1.2 16.8008 4.699 16.8008 9C16.8008 9.513 16.7478 10.014 16.6528 10.5H17.8698C17.9538 10.013 18.0008 9.512 18.0008 9C18.0008 4.029 13.9718 0 9.00078 0ZM8.99922 15.3002C12.4782 15.3002 15.2992 12.4802 15.2992 9.0002C15.2992 5.5202 12.4782 2.7002 8.99922 2.7002C5.52022 2.7002 2.69922 5.5212 2.69922 9.0002C2.69922 12.4792 5.52022 15.3002 8.99922 15.3002ZM9.096 9.817L9.09 9.816L8.454 9.613C7.755 9.396 6.291 8.941 6.291 7.337C6.291 6.186 7.056 5.356 8.25 5.096V4H9.75V5.065C10.956 5.275 11.693 6.049 11.709 7.198L10.209 7.219C10.206 7.023 10.199 6.501 9.063 6.501C8.68 6.501 7.79 6.582 7.79 7.336C7.79 7.704 7.958 7.888 8.904 8.182L9.546 8.386C10.251 8.604 11.709 9.061 11.709 10.662C11.709 11.813 10.944 12.643 9.75 12.903V14H8.25V12.935C7.044 12.725 6.307 11.951 6.291 10.802L7.791 10.781C7.794 10.977 7.801 11.499 8.937 11.499C9.32 11.499 10.21 11.418 10.21 10.664C10.209 10.295 10.041 10.111 9.096 9.817Z"
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
          d="M9 16.8C4.699 16.8 1.2 13.301 1.2 9C1.2 8.487 1.253 7.986 1.348 7.5H0.131C0.047 7.987 0 8.488 0 9C0 13.971 4.029 18 9 18C12.132 18 14.888 16.398 16.5 13.971V16.9L17.7 15.7V12H16.198C15.02 14.815 12.238 16.8 9 16.8ZM9.00078 0C5.86878 0 3.11278 1.602 1.50078 4.029V1.1L0.300781 2.3V6H1.80278C2.98078 3.184 5.76278 1.2 9.00078 1.2C13.3018 1.2 16.8008 4.699 16.8008 9C16.8008 9.513 16.7478 10.014 16.6528 10.5H17.8698C17.9538 10.013 18.0008 9.512 18.0008 9C18.0008 4.029 13.9718 0 9.00078 0ZM8.99922 15.3002C12.4782 15.3002 15.2992 12.4802 15.2992 9.0002C15.2992 5.5202 12.4782 2.7002 8.99922 2.7002C5.52022 2.7002 2.69922 5.5212 2.69922 9.0002C2.69922 12.4792 5.52022 15.3002 8.99922 15.3002ZM9.096 9.817L9.09 9.816L8.454 9.613C7.755 9.396 6.291 8.941 6.291 7.337C6.291 6.186 7.056 5.356 8.25 5.096V4H9.75V5.065C10.956 5.275 11.693 6.049 11.709 7.198L10.209 7.219C10.206 7.023 10.199 6.501 9.063 6.501C8.68 6.501 7.79 6.582 7.79 7.336C7.79 7.704 7.958 7.888 8.904 8.182L9.546 8.386C10.251 8.604 11.709 9.061 11.709 10.662C11.709 11.813 10.944 12.643 9.75 12.903V14H8.25V12.935C7.044 12.725 6.307 11.951 6.291 10.802L7.791 10.781C7.794 10.977 7.801 11.499 8.937 11.499C9.32 11.499 10.21 11.418 10.21 10.664C10.209 10.295 10.041 10.111 9.096 9.817Z"
        />
      </mask>
      <g mask="url(#mask0_1_3077)" />
    </svg>
  );
}

export { CalculatorCurrencyActive };