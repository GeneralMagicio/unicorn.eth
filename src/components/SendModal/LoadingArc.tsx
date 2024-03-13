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
      {!txComplete && (
        <Checkmark viewBox="0 0 48 48" enable-background="new 0 0 48 48">
          <polygon
            fill="rgba(56, 137, 255, 1)"
            points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
          />
        </Checkmark>
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
  stroke-width: 2;
`

const Circle = styled.path`
  fill: none;
  stroke-width: 1.4;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
  stroke: rgba(56, 137, 255, 1);
`

const Checkmark = styled.svg``

export default LoadingArc
