'use client'
import { useState, useEffect } from 'react'

const useFetchAccommodations = (page, categoryId, location, startDate, endDate, guest) => {
  const [accommodations, setAccommodations] = useState([])

  const fetchData = (page, categoryId) => {
    let url = `http://localhost:3000/apis/rooms/?page=${page}`

    if (categoryId) {
      url += `&category=${categoryId}`
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // 데이터 필터링
        let filteredData = data.data.accommodationInfo

        // 위치
        if (location) {
          filteredData = filteredData.filter(item => {
            const countryLocation = item.countryLocationName.split(' ')[0] // 첫 번째 단어 추출
            return countryLocation === location
          })
        }

        // 날짜
        if (startDate && endDate) {
          filteredData = filteredData.filter(
            item => item.dates.startDate === startDate && item.dates.endDate === endDate,
          )
        }

        // 게스트 인원
        if (guest) {
          const guestCount = parseInt(guest)
          filteredData = filteredData.filter(item => {
            const maxGuest = parseInt(
              //'최대 인원 4명' 여기서 4만 추출
              item.briefRoomInfo.find(info => info.includes('최대 인원')).match(/\d+/)[0],
            )
            return maxGuest >= guestCount
          })
        }

        setAccommodations(prev => [...prev, ...filteredData])
      })
  }

  // 초기 데이터 로드
  useEffect(() => {
    setAccommodations([])
    fetchData(page, categoryId)
  }, [categoryId, location, startDate, endDate, guest])

  // 스크롤에 따른 추가 데이터 로드
  useEffect(() => {
    if (page > 1) {
      fetchData(page - 1)
    }
  }, [page])

  return accommodations
}

export default useFetchAccommodations
