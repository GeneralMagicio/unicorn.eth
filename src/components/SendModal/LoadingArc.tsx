import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const LoadingArc = ({ duration, txComplete }: any) => {
  const [percentLoaded, setPercentLoaded] = useState(0)

  useEffect(() => {
    const fastInterval = duration / 80
    let slowInterval = duration / 20
    let slowProgress = false

    const loadingInterval = setInterval(() => {
      setPercentLoaded((oldPercentLoaded) => {
        if (oldPercentLoaded >= 80) {
          // Once we hit 80%, slow down the progress
          if (!slowProgress) {
            clearInterval(loadingInterval)
            slowProgress = true // Enable slow progress
            // Start a new interval with slower progress
            setInterval(() => {
              setPercentLoaded((oldPercentLoaded) => {
                if (oldPercentLoaded < 95) {
                  return oldPercentLoaded + 0.1
                }
                return oldPercentLoaded
              })
            }, slowInterval)
          }
          return oldPercentLoaded
        }
        return oldPercentLoaded + 1
      })
    }, fastInterval)

    return () => clearInterval(loadingInterval)
  }, [duration])

  useEffect(() => {
    if (txComplete) {
      setPercentLoaded(100) // Complete the arc when the transaction is complete
    }
  }, [txComplete])

  // Render the arc based on percentLoaded
  return (
    <CircularChart viewBox="0 0 36 36">
      {/* Background Circle */}
      <CircleBg
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      {/* Foreground Circle (Loading Arc) */}
      <Circle
        strokeDasharray={`${percentLoaded}, 100`}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      {(txComplete || percentLoaded >= 100) && (
        <svg
          x="11"
          y="11"
          width="14"
          height="14"
          viewBox="0 0 35 25"
          fill="none">
          <path
            d="M2.91602 13.1327L12.6702 22.8786C17.3637 14.6735 23.8589 7.64116 31.666 2.31191L32.0869 2.02441"
            stroke="#3889FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </CircularChart>
  )
}

const CircularChart = styled.svg`
  display: block;
  margin: auto;
  width: 75px;
`

const CircleBg = styled.path`
  fill: none;
  stroke: #eee;
  strokewidth: 2;
`

const Circle = styled.path`
  fill: none;
  strokewidth: 1.4;
  strokelinecap: round;
  animation: progress 1s ease-out forwards;
  stroke: rgba(56, 137, 255, 1);
`

export default LoadingArc
