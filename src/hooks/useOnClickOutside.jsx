import { useEffect } from 'react'

/**
 * 지정한 요소이 바깥 부분을 클릭 했을 시 원하는 동작을 실행시키는 HOOK
 * 인자 ref : focus 할 요소를 가져옴
 * 인자 handler : 선택한 요소의 바깥 부분을 클릭시 처리할 콜백 함수
 *
 * 구현 방법
 * - DOM 전체에 마우스 클릭 이벤트를 발생 시킴
 * - 선택한 요소를 전체 이벤트에서 제외 시킨다.
 * - 만약 마우스가 클릭한 곳이 선택한 요소가 아니라면, 전달받은 handler 함수를 실행시킴
 */

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // 예외 처리!
      // 1. 함수를 실행하는 시점에서 current 값에 Dom 값이 들어가 있일 때
      // 2. 선택한 요소 내부를 클릭했을 때,
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    // 전체 DOM에 마우스 이벤트 등록
    document.addEventListener('mousedown', listener)

    //component가 mount되면 이벤트 해제
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
