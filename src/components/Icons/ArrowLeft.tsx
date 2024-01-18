import { SVGProps } from 'react'

export const ArrowLeft: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.83 6C6.73113 7.55181 4.84208 9.36892 3.21 11.406C3.0744 11.5743 3.00032 11.7839 3 12M3 12C3.00032 12.2161 3.0744 12.4257 3.21 12.594C4.84211 14.6311 6.73115 16.4482 8.83 18M3 12H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
