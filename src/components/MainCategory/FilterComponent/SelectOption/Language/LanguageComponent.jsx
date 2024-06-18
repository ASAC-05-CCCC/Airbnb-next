import { useDispatch, useSelector } from 'react-redux'

import SelectOptionComponent from '@/components/MainCategory/FilterComponent/SelectOption/SelectOptionComponent'
import { setLanguageOption } from '@/redux/filterSlice'

function LanguageComponent() {
  const dispatch = useDispatch()

  const checkItem = useSelector(states => states['filter'].languageOption)
  const setCheckItem = (optionIdx, contentIdx) => {
    dispatch(setLanguageOption({ optionIdx: optionIdx, contentIdx: contentIdx }))
  }

  return (
    <>
      <SelectOptionComponent
        checkItem={checkItem}
        setCheckItem={setCheckItem}
        title={'호스트 언어'}
        options={[{ title: '', contents: ['중국어(간체)', '영어', '프랑스어', '독일어'] }]}
      />
    </>
  )
}

export default LanguageComponent
