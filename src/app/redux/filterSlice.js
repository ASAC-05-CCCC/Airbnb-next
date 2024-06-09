import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    type: '모든 유형',
    description: '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.',
    minPrice: 14000,
    maxPrice: 1000000,
    bedroomCount: '상관없음',
    bedCount: '상관없음',
    bathroomCount: '상관없음',
  },
  reducers: {
    setClear: prevState => {
      prevState.type = '모든 유형'
      prevState.description = '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.'
      prevState.minPrice = 14000
      prevState.maxPrice = 1000000
      prevState.bedroomCount = '상관없음'
      prevState.bedCount = '상관없음'
      prevState.bathroomCount = '상관없음'
    },

    selectPlaceType: (prevState, action) => {
      prevState.type = action.payload
      if (action.payload === '모든 유형') {
        prevState.type = '모든 유형'
        prevState.description = '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.'
      } else if (action.payload === '방') {
        prevState.type = '방'
        prevState.description = '단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.'
      } else {
        prevState.type = '집 전체'
        prevState.description = '집 전체를 단독으로 사용합니다.'
      }
    },

    setPrice: (prevState, action) => {
      const { minmax, price } = action.payload
      if (minmax === '최저') {
        prevState.minPrice = price
      } else {
        prevState.maxPrice = price
      }
    },

    setBedroomCount: (prevState, action) => {
      prevState.bedroomCount = action.payload
    },
    setBedCount: (prevState, action) => {
      prevState.bedCount = action.payload
    },
    setBathroomCount: (prevState, action) => {
      prevState.bathroomCount = action.payload
    },
  },
})

export const {
  selectPlaceType,
  setPrice,
  setClear,
  setBedroomCount,
  setBedCount,
  setBathroomCount,
} = filterSlice.actions
export default filterSlice.reducer
