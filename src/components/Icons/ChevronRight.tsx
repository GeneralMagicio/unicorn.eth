import { SVGProps } from 'react'

export const ChevronRight: React.FC<SVGProps<SVGSVGElement>> = ({
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
      d="M10 8.13965C11.4558 9.19582 12.7652 10.4403 13.894 11.8406C13.9625 11.9248 14 12.0301 14 12.1386C14 12.2472 13.9625 12.3525 13.894 12.4366C12.7653 13.8373 11.4559 15.0821 10 16.1386"
      stroke="#9B9BA7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
