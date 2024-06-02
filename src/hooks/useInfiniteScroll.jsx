import { useCallback, useEffect, useRef, useState } from 'react'

const useInfiniteScroll = targetEl => {
  //targetEl: 스크롤 가장 마지막 위치에 있는 요소

  const observerRef = useRef(null) //IntersectionObserver 인스턴스 저장
  const [intersecting, setIntersecting] = useState(false) // 대상요소가 뷰포트와 교차하는지 여부. 교차하면 true

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      // entries: 감시되고 있는 모든 타겟들
      observerRef.current = new IntersectionObserver(entries =>
        setIntersecting(entries.some(entry => entry.isIntersecting)),
      )
    }
    return observerRef.current
  }, [])

  useEffect(() => {
    // targetEl이 존재할 경우 GetObserver()의 ovserve 메서드 파라미터로 할당하여 targeEl 관찰
    if (targetEl.current) getObserver().observe(targetEl.current) //targetEl.current = 현재 참조하고 있는 DOM 요소

    return () => {
      getObserver().disconnect()
    }
  }, [targetEl.current])

  return intersecting
}

export default useInfiniteScroll
