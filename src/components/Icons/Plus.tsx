import { SVGProps } from 'react'

export const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 15V8M8 8V1M8 8H1M8 8H15"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
