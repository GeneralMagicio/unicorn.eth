import { SVGProps } from 'react'

export const Exit: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 13L7 7M7 7L13 1M7 7L1 1M7 7L13 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
