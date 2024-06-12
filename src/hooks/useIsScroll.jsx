import { useEffect, useState } from 'react'

function useIsScroll() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    /**
     * * 스크롤 이벤트 발생했을 때,
     * ? -> 그냥 스크롤이 될때를 기준으로 하면 계속 렌더링이 발생??
     * ? ->
     * * 스크롤 상태를 true로 변경
     */

    const handleScroll = () => {
      const offsetY = window.scrollY

      console.log(offsetY)
      if (offsetY > 0 && scrolled === false) {
        setScrolled(true)
      } else if (offsetY === 0 && scrolled === true) {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return scrolled
}

export default useIsScroll
