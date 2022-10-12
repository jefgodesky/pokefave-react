import { useEffect, useState, RefObject } from 'react'

export default function useOnScreen (ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = IntersectionObserver === undefined
    ? { observe: () => {}, disconnect: () => {} }
    : new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
  useEffect(() => {
    if (ref.current === null) return
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  })
  return isIntersecting
}
