import { useDispatch, useSelector } from 'react-redux'

import SelectOptionComponent from '@/components/MainCategory/FilterComponent/SelectOption/SelectOptionComponent'
import { setFacilitiesOption } from '@/redux/filterSlice'

function FacilitiesComponent() {
  const dispatch = useDispatch()

  const checkItem = useSelector(states => states['filter'].facilitiesOption)
  const setCheckItem = (optionIdx, contentIdx) => {
    dispatch(setFacilitiesOption({ optionIdx: optionIdx, contentIdx: contentIdx }))
  }

  return (
    <>
      <SelectOptionComponent
        checkItem={checkItem}
        setCheckItem={setCheckItem}
        title={'편의시설'}
        options={[
          {
            title: '필수',
            contents: [
              '무선 인터넷',
              '주방',
              '세탁기',
              '건조기',
              '에어컨',
              '난방',
              '업무 전용 공간',
              'TV',
              '헤어드라이어',
              '다리미',
            ],
          },
          {
            title: '특징',
            contents: [
              '수영장',
              '자쿠지 욕조',
              '무료 주차 공간',
              '전기차 충전시설',
              '아기 침대',
              '킹사이즈 침대',
              '헬스장',
              '바비큐 그릴',
              '아침식사',
              '실내 벽난로',
              '흡연 가능',
            ],
          },
          {
            title: '위치',
            contents: ['해변에 인접', '수변에 인접'],
          },
          {
            title: '안전',
            contents: ['화재경보기', '일산화탄소 경보기'],
          },
        ]}
      />
    </>
  )
}

export default FacilitiesComponent
