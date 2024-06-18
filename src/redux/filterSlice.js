import { createSlice } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
enableMapSet()

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
    isPreference: false,
    isHouse: false,
    isApartment: false,
    isOutbuilding: false,
    isHotel: false,
    accessibilityOption: [[], [], [], []],
    facilitiesOption: [[], [], [], []],
    languageOption: [[]],
    isInstantBook: false,
    isSelfCheckIn: false,
    isAllowPet: false,
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
      prevState.isPreference = false
      prevState.isHouse = false
      prevState.isApartment = false
      prevState.isOutbuilding = false
      prevState.isHotel = false
      prevState.accessibilityOption = [[], [], [], []]
      prevState.facilitiesOption = [[], [], [], []]
      prevState.languageOption = [[]]
      prevState.isInstantBook = false
      prevState.isSelfCheckIn = false
      prevState.isAllowPet = false
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

    setIsPreference: prevState => {
      if (prevState.isPreference) {
        prevState.isPreference = false
      } else {
        prevState.isPreference = true
      }
    },

    setIsHouse: prevState => {
      if (prevState.isHouse) {
        prevState.isHouse = false
      } else {
        prevState.isHouse = true
      }
    },

    setIsApartment: prevState => {
      if (prevState.isApartment) {
        prevState.isApartment = false
      } else {
        prevState.isApartment = true
      }
    },

    setIsOutbuilding: prevState => {
      if (prevState.isOutbuilding) {
        prevState.isOutbuilding = false
      } else {
        prevState.isOutbuilding = true
      }
    },

    setIsHotel: prevState => {
      if (prevState.isHotel) {
        prevState.isHotel = false
      } else {
        prevState.isHotel = true
      }
    },

    setAccessibilityOption: (prevState, action) => {
      const { optionIdx, contentIdx } = action.payload
      const newArray = prevState.accessibilityOption[optionIdx]
      if (newArray.includes(contentIdx)) {
        newArray.filter(item => item !== contentIdx)
      } else {
        newArray.push(contentIdx)
      }

      prevState.accessibilityOption = [
        ...prevState.accessibilityOption.slice(0, optionIdx),
        newArray,
        ...prevState.accessibilityOption.slice(optionIdx + 1),
      ]
    },

    setFacilitiesOption: (prevState, action) => {
      const { optionIdx, contentIdx } = action.payload
      const newArray = prevState.facilitiesOption[optionIdx]
      if (newArray.includes(contentIdx)) {
        newArray.filter(item => item !== contentIdx)
      } else {
        newArray.push(contentIdx)
      }

      prevState.facilitiesOption = [
        ...prevState.facilitiesOption.slice(0, optionIdx),
        newArray,
        ...prevState.facilitiesOption.slice(optionIdx + 1),
      ]
    },

    setLanguageOption: (prevState, action) => {
      const { optionIdx, contentIdx } = action.payload
      const newArray = prevState.languageOption[optionIdx]
      if (newArray.includes(contentIdx)) {
        newArray.filter(item => item !== contentIdx)
      } else {
        newArray.push(contentIdx)
      }

      prevState.languageOption = [
        ...prevState.languageOption.slice(0, optionIdx),
        newArray,
        ...prevState.languageOption.slice(optionIdx + 1),
      ]
    },

    setIsInstantBook: prevState => {
      if (prevState.isInstantBook) {
        prevState.isInstantBook = false
      } else {
        prevState.isInstantBook = true
      }
    },
    setIsSelfCheckIn: prevState => {
      if (prevState.isSelfCheckIn) {
        prevState.isSelfCheckIn = false
      } else {
        prevState.isSelfCheckIn = true
      }
    },
    setIsAllowPet: prevState => {
      if (prevState.isAllowPet) {
        prevState.isAllowPet = false
      } else {
        prevState.isAllowPet = true
      }
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
  setIsPreference,
  setIsHouse,
  setIsApartment,
  setIsOutbuilding,
  setIsHotel,
  setAccessibilityOption,
  setFacilitiesOption,
  setLanguageOption,
  setIsInstantBook,
  setIsSelfCheckIn,
  setIsAllowPet,
} = filterSlice.actions

export default filterSlice.reducer
