import React from 'react'

const FlipClock = () => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1e0132]">
      <div className="flex space-x-4">
        <FlipUnit label="Hours" value={('0' + time.getHours()).slice(-2)} />
        <FlipUnit label="Minutes" value={('0' + time.getMinutes()).slice(-2)} />
        <FlipUnit label="Seconds" value={('0' + time.getSeconds()).slice(-2)} />
      </div>
    </div>
  )
}

const FlipUnit = ({ label, value }) => {
  const [prevValue, setPrevValue] = React.useState(value)
  const [flip, setFlip] = React.useState(false)

  React.useEffect(() => {
    if (value !== prevValue) {
      setFlip(true)
      const timeout = setTimeout(() => {
        setPrevValue(value)
        setFlip(false)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [value, prevValue])

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-24 text-white rounded-md overflow-hidden shadow-lg perspective">
        <div className="absolute top-0 w-full h-1/2 bg-[#6A0DAD] flex items-center justify-center text-4xl font-bold z-20">
          {prevValue}
        </div>
        <div className={`absolute bottom-0 w-full h-1/2 bg-[#5A189A] flex items-center justify-center text-4xl font-bold z-10`}>
          {flip ? value : prevValue}
        </div>
        {flip && (
          <div className="absolute top-0 w-full h-full animate-flip z-30 bg-[#4B0082] text-white text-4xl font-bold flex items-center justify-center rounded-md">
            {value}
          </div>
        )}
      </div>
      <span className="text-sm text-purple-200 mt-2">{label}</span>
    </div>
  )
}

export default FlipClock
