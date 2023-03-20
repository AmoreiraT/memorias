import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function TradeFinance(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1634 0.0832062L11.8134 1.73321C14.7254 2.86521 16.7994 5.69121 16.7994 8.99921C16.7994 12.9672 13.8194 16.2452 9.98039 16.7302L8.84739 15.5982L10.0484 14.3962C12.5844 13.9062 14.4994 11.6782 14.4994 9.00021C14.4994 6.68221 13.0634 4.70321 11.0344 3.89421L10.0754 4.85321C11.9244 5.33421 13.2994 7.00221 13.2994 9.00021C13.2994 11.1932 11.6424 12.9882 9.51839 13.2472L7.15039 15.5992L9.58639 17.9702C14.2824 17.6662 17.9994 13.7712 17.9994 8.99921C17.9994 4.42421 14.5824 0.655206 10.1634 0.0832062ZM1.2 8.99901C1.2 5.03101 4.181 1.75201 8.019 1.26801L9.151 2.40001L7.948 3.60301C5.414 4.09401 3.5 6.32201 3.5 9.00001C3.5 11.318 4.935 13.296 6.964 14.106L7.923 13.147C6.075 12.665 4.7 10.997 4.7 9.00001C4.7 6.80701 6.356 5.01301 8.48 4.75301L10.849 2.40001L8.413 0.029007C3.717 0.333007 0 4.22701 0 8.99901C0 13.574 3.417 17.344 7.837 17.915L6.187 16.265C3.274 15.134 1.2 12.307 1.2 8.99901ZM8.57939 5.90791V6.38491C7.70939 6.53891 7.15039 7.12791 7.15039 7.95291C7.15039 9.06691 8.14339 9.37491 8.61439 9.51991L9.02039 9.64991L9.02439 9.65191C9.65039 9.84691 9.65039 9.94191 9.65039 10.0749C9.65039 10.4459 9.16739 10.4859 8.96039 10.4859C8.35639 10.4859 8.35239 10.2569 8.35139 10.1469L7.15139 10.1649C7.16339 10.9759 7.71239 11.5339 8.58039 11.6589V12.0899H9.51039V11.6219C10.3274 11.4439 10.8504 10.8709 10.8504 10.0749C10.8504 8.96391 9.85839 8.65391 9.38239 8.50591V8.50691L8.97539 8.37691C8.35039 8.18291 8.35039 8.08591 8.35039 7.95291C8.35039 7.58191 8.83339 7.54191 9.04039 7.54191C9.64439 7.54191 9.64839 7.77091 9.64939 7.88091L10.8494 7.86291C10.8374 7.08091 10.3244 6.53791 9.50939 6.38891V5.90891H8.57939V5.90791Z"
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
          d="M10.1634 0.0832062L11.8134 1.73321C14.7254 2.86521 16.7994 5.69121 16.7994 8.99921C16.7994 12.9672 13.8194 16.2452 9.98039 16.7302L8.84739 15.5982L10.0484 14.3962C12.5844 13.9062 14.4994 11.6782 14.4994 9.00021C14.4994 6.68221 13.0634 4.70321 11.0344 3.89421L10.0754 4.85321C11.9244 5.33421 13.2994 7.00221 13.2994 9.00021C13.2994 11.1932 11.6424 12.9882 9.51839 13.2472L7.15039 15.5992L9.58639 17.9702C14.2824 17.6662 17.9994 13.7712 17.9994 8.99921C17.9994 4.42421 14.5824 0.655206 10.1634 0.0832062ZM1.2 8.99901C1.2 5.03101 4.181 1.75201 8.019 1.26801L9.151 2.40001L7.948 3.60301C5.414 4.09401 3.5 6.32201 3.5 9.00001C3.5 11.318 4.935 13.296 6.964 14.106L7.923 13.147C6.075 12.665 4.7 10.997 4.7 9.00001C4.7 6.80701 6.356 5.01301 8.48 4.75301L10.849 2.40001L8.413 0.029007C3.717 0.333007 0 4.22701 0 8.99901C0 13.574 3.417 17.344 7.837 17.915L6.187 16.265C3.274 15.134 1.2 12.307 1.2 8.99901ZM8.57939 5.90791V6.38491C7.70939 6.53891 7.15039 7.12791 7.15039 7.95291C7.15039 9.06691 8.14339 9.37491 8.61439 9.51991L9.02039 9.64991L9.02439 9.65191C9.65039 9.84691 9.65039 9.94191 9.65039 10.0749C9.65039 10.4459 9.16739 10.4859 8.96039 10.4859C8.35639 10.4859 8.35239 10.2569 8.35139 10.1469L7.15139 10.1649C7.16339 10.9759 7.71239 11.5339 8.58039 11.6589V12.0899H9.51039V11.6219C10.3274 11.4439 10.8504 10.8709 10.8504 10.0749C10.8504 8.96391 9.85839 8.65391 9.38239 8.50591V8.50691L8.97539 8.37691C8.35039 8.18291 8.35039 8.08591 8.35039 7.95291C8.35039 7.58191 8.83339 7.54191 9.04039 7.54191C9.64439 7.54191 9.64839 7.77091 9.64939 7.88091L10.8494 7.86291C10.8374 7.08091 10.3244 6.53791 9.50939 6.38891V5.90891H8.57939V5.90791Z"
        />
      </mask>
      <g mask="url(#mask0_1_1744)" />
    </svg>
  );
}

export { TradeFinance };