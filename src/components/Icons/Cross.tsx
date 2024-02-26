import { SVGProps } from 'react'

export const CrossIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 12L8 8M8 8L12 4M8 8L4 4M8 8L12 12"
      stroke="#9B9BA7"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
