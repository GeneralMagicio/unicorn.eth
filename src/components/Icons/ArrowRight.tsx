import { SVGProps } from 'react'

export const ArrowRightIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.17 6C17.2689 7.55181 19.1579 9.36892 20.79 11.406C20.93 11.58 21 11.79 21 12M21 12C20.9997 12.2161 20.9256 12.4257 20.79 12.594C19.1579 14.6311 17.2689 16.4482 15.17 18M21 12H3"
      stroke={props.color || '#3889FF'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
