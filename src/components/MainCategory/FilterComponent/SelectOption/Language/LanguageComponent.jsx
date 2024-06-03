import { useState } from 'react'

import SelectOptionComponent from '@/components/MainCategory/FilterComponent/SelectOption/SelectOptionComponent'

function LanguageComponent() {
  const [checkItem, setCheckItem] = useState([new Set()])

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
