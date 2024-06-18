'use client'
import { useState, useEffect } from 'react'

const useFetchAccommodations = (page, filters = {}) => {
  const [accommodations, setAccommodations] = useState([])

  const fetchData = (page, filters = {}) => {
    let url = `http://localhost:3000/apis/rooms/?page=${page}`

    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        url += `&${key}=${filters[key]}`
      }
    })

    console.log('url 뭐야: ', url)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAccommodations(prev => [...prev, ...data.data.accommodationInfo])
      })
  }

  // 초기 데이터 로드
  useEffect(() => {
    setAccommodations([])
    fetchData(page, filters)
  }, [...Object.values(filters)])

  // 스크롤에 따른 추가 데이터 로드
  useEffect(() => {
    if (page > 1) {
      fetchData(page - 1, filters)
    }
  }, [page])

  return accommodations
}

export default useFetchAccommodations
