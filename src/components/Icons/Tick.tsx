import { SVGProps } from 'react'

export const TickIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4 12.3733L9.351 17.7193L9.779 16.9713C12.0714 12.9629 15.2437 9.52728 19.057 6.9233L20 6.2793"
      stroke="#3889FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
