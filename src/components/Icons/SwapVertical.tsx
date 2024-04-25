import { SVGProps } from 'react'

export const SwapVerticalIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18.5 17.113C17.4655 18.5124 16.2541 19.7719 14.896 20.86C14.7838 20.9504 14.6441 20.9998 14.5 21V6M6.5 6.887C7.53452 5.48764 8.74593 4.22816 10.104 3.14C10.2162 3.04955 10.3559 3.00016 10.5 3V18"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
