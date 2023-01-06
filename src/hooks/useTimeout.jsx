import { useCallback, useEffect, useRef } from "react"

export default function useTimeout(callback, delay,autoSet= true) {
  const callbackRef = useRef(callback)
  const TimeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    TimeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    TimeoutRef.current && clearTimeout(TimeoutRef.current)
  }, [])

  useEffect(() => {
    if(autoSet)
      set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}