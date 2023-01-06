import { useCallback, useEffect, useRef } from "react"

export default function useInterval(callback, delay) {
  const callbackRef = useRef(callback)
  const IntervalRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    IntervalRef.current && clearInterval(IntervalRef.current)
    IntervalRef.current = setInterval(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    IntervalRef.current && clearInterval(IntervalRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}