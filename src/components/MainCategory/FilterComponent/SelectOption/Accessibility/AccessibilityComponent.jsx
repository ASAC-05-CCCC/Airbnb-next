import { useState } from 'react'

import SelectOptionComponent from '@/components/MainCategory/FilterComponent/SelectOption/SelectOptionComponent'

function AccessibilityComponent() {
  const [checkItem, setCheckItem] = useState([new Set(), new Set(), new Set(), new Set()])
  return (
    <>
      <SelectOptionComponent
        checkItem={checkItem}
        setCheckItem={setCheckItem}
        title={'접근성 편의'}
        options={[
          {
            title: '게스트 출입구 및 주차장',
            contents: [
              '게스트 출입구에 계단이나 문턱 없음',
              '너비 81cm 이상의 게스트 출입구',
              '휠체어 접근 가능한 주차 공간',
              '게스트 출입구까지 계단 없음',
            ],
          },
          {
            title: '침실',
            contents: ['계단이나 문턱 없는 침실', '너비 81cm 이상의 침실 출입구'],
          },
          {
            title: '욕실',
            contents: [
              '계단이나 문턱 없는 욕실',
              '너비 81cm 이상의 욕실 출입구',
              '샤워실 고정 손잡이',
              '변기 옆 고정 손잡이',
              '계단이나 문턱 없는 샤워실',
              '샤워/목욕 의자',
            ],
          },
          {
            title: '장애인용 보조 장치',
            contents: ['천장형 또는 이동식 리프트'],
          },
        ]}
      />
    </>
  )
}

export default AccessibilityComponent
