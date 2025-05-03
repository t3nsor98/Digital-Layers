import React from 'react'

const FlipClock = () => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="flip-clock">
        <div className="flip-clock-face">
          <span className="flip-clock-digit">{('0' + time.getHours()).slice(-2)}</span>
        </div>
        <div className="flip-clock-colon">:</div>
        <div className="flip-clock-face">
          <span className="flip-clock-digit">{('0' + time.getMinutes()).slice(-2)}</span>
        </div>
        <div className="flip-clock-colon">:</div>
        <div className="flip-clock-face">
          <span className="flip-clock-digit">{('0' + time.getSeconds()).slice(-2)}</span>
        </div>
      </div>
    </div>
  )
}

export default FlipClock
