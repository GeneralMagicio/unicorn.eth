import { SVGProps } from 'react'

export const SendIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 15C3 16.3261 3.52678 17.5979 4.46447 18.5355C5.40215 19.4732 6.67392 20 8 20H16C17.3261 20 18.5979 19.4732 19.5355 18.5355C20.4732 17.5979 21 16.3261 21 15M9 6.812C9.73964 5.82531 10.5981 4.93358 11.556 4.157C11.6815 4.05518 11.8384 3.99973 12 4M12 4C12.1616 3.99973 12.3185 4.05518 12.444 4.157C13.4019 4.93357 14.2604 5.8253 15 6.812M12 4V15"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
