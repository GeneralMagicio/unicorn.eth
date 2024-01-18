import { SVGProps } from 'react'

export const TransactionsIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.18267 16.0002C7.31683 17.3795 5.63753 18.9947 4.18667 20.8055C4.06607 20.9551 4.00021 21.1414 4 21.3335M4 21.3335C4.00021 21.5256 4.06607 21.7119 4.18667 21.8615C5.63753 23.6723 7.31683 25.2875 9.18267 26.6668M4 21.3335H22.6667M22.8173 5.3335C24.6831 6.71287 26.3624 8.32808 27.8133 10.1388C27.9373 10.2935 28 10.4802 28 10.6668M28 10.6668C27.9997 10.8589 27.9338 11.0452 27.8133 11.1948C26.3625 13.0056 24.6832 14.6208 22.8173 16.0002M28 10.6668H9.33333"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
