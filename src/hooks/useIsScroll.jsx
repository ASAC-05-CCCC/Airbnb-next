import { useCallback, useEffect, useState } from 'react'
import { throttle } from 'lodash'

function useIsScroll() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const offsetY = window.scrollY

    if (offsetY > 0 && scrolled === false) {
      setScrolled(true)
    } else if (offsetY === 0) {
      setScrolled(false)
    }
  }, [scrolled])

  useEffect(() => {
    const throttleScroll = throttle(handleScroll, 300)

    window.addEventListener('scroll', throttleScroll)

    return () => {
      window.removeEventListener('scroll', throttleScroll)
    }
  }, [handleScroll])

  return scrolled
}

export default useIsScroll
