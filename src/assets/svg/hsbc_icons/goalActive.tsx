import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function GoalActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM9 16C5.14 16 2 12.86 2 9C2 5.14 5.14 2 9 2C12.86 2 16 5.14 16 9C16 12.86 12.86 16 9 16ZM9 3C5.686 3 3 5.687 3 9C3 12.313 5.686 15 9 15C12.314 15 15 12.313 15 9C15 5.687 12.314 3 9 3ZM9 13C6.794 13 5 11.206 5 9C5 6.794 6.794 5 9 5C11.206 5 13 6.794 13 9C13 11.206 11.206 13 9 13ZM9 6C7.343 6 6 7.343 6 9C6 10.657 7.343 12 9 12C10.657 12 12 10.657 12 9C12 7.343 10.657 6 9 6ZM9 10C8.449 10 8 9.551 8 9C8 8.449 8.449 8 9 8C9.551 8 10 8.449 10 9C10 9.551 9.551 10 9 10Z"
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
          d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM9 16C5.14 16 2 12.86 2 9C2 5.14 5.14 2 9 2C12.86 2 16 5.14 16 9C16 12.86 12.86 16 9 16ZM9 3C5.686 3 3 5.687 3 9C3 12.313 5.686 15 9 15C12.314 15 15 12.313 15 9C15 5.687 12.314 3 9 3ZM9 13C6.794 13 5 11.206 5 9C5 6.794 6.794 5 9 5C11.206 5 13 6.794 13 9C13 11.206 11.206 13 9 13ZM9 6C7.343 6 6 7.343 6 9C6 10.657 7.343 12 9 12C10.657 12 12 10.657 12 9C12 7.343 10.657 6 9 6ZM9 10C8.449 10 8 9.551 8 9C8 8.449 8.449 8 9 8C9.551 8 10 8.449 10 9C10 9.551 9.551 10 9 10Z"
        />
      </mask>
      <g mask="url(#mask0_1_1131)" />
    </svg>
  );
}

export { GoalActive };
