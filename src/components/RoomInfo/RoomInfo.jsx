// 'use client'
// import React from 'react'
import SimpleInfo from '@/components/RoomInfo/SimpleInfo.jsx'
import RoomHost from '@/components/RoomInfo/RoomHost.jsx'
import InfoDetail from '@/components/RoomInfo/InfoDetail.jsx'
// import GenerateReviewMetaData from '@/utils/generateReviewMetaData'
import GuestPrefer from './GuestPrefer'
// import { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'

// function ReviewDataDto(data) {
//   return data.map(data => {
//     return {
//       name: data.name,
//       country: data.country,
//       image: data.image,
//       rating: data.rating,
//       timestamp: data.timestamp,
//       message: data.message,
//     }
//   })
// }

// function ReviewMetaDataDto(data) {
//   return data.Ratings
// }

const RoomInfo = ({ roomData }) => {
  // const [reviewData, setReviewData] = useState([])
  // const [reviewMetaData, setReviewMetaData] = useState([])
  // const [reviewOverall, setReviewOverall] = useState([])
  // const [guestFavorite, setGuestFavorite] = useState(false)
  // const [averageRating, setAverageRating] = useState(0)
  // const pathname = usePathname()
  // const id = pathname.slice(7)

  // useEffect(() => {
  //   fetch(`/apis/host/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setReviewMetaData(ReviewMetaDataDto(data))
  //       setGuestFavorite(data.guestFavorite)
  //       setAverageRating(data.rating)
  //     })
  //     .catch(error => console.error('Error fetching ReviewDataDto.json:', error))

  //   fetch(`/apis/review/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setReviewData(ReviewDataDto(data))
  //     })
  //     .catch(error => console.error('Error fetching ReviewDataDto.json:', error))
  // }, [])
  const reviewDataDto = {
    name: roomData.name,
    country: roomData.country,
    image: roomData.image,
    rating: roomData.rating,
    timestamp: roomData.timestamp,
    message: roomData.message,
  }

  const reviewMetaDataDto = roomData.Ratings

  return (
    <div>
      <SimpleInfo
        roomData={roomData}
        reviewData={reviewDataDto}
        reviewMetaData={reviewMetaDataDto}
        averageRating={roomData.guestFavorite}
        reviewOverall={undefined}
        guestFavorite={undefined}
      />
      <GuestPrefer
        roomData={roomData}
        reviewData={reviewDataDto}
        reviewMetaData={reviewMetaDataDto}
        averageRating={roomData.guestFavorite}
        reviewOverall={undefined}
        guestFavorite={undefined}
      />
      <InfoDetail />
      <RoomHost roomData={roomData} />
    </div>
  )
}

export default RoomInfo

/**
 * {
    "accommodationId": 3,
    "accommodationName": "나인하우스 #독채",
    "countryLocationName": "한국 가평군",
    "distance": "47km",
    "dates": {
        "startDate": "2024-6-5",
        "endDate": "2024-6-7"
    },
    "locationName": "가평군, 한국의 저택 전체",
    "briefRoomInfo": [
        "최대 인원 8명",
        "침실 3개",
        "욕실 3개"
    ],
    "guestFavorite": false,
    "rating": "5.0",
    "reviewCount": "3",
    "hostName": "Sahee",
    "hostSince": 2022,
    "hostImage": "https://a0.muscache.com/im/pictures/user/User-65974611/original/2a048f11-2a58-4d87-acf6-c07bc987da9b.jpeg?im_w=240",
    "pricePerDay": 1320000,
    "imageUrl": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/56b74c47-1dda-4dea-8d86-ac909c1d6961.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/cca153d6-555c-4846-be7e-eddf233ad076.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/19253af6-f8ca-4bbd-99f5-b2882e0111f6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/b299e13f-95a1-41f3-b74d-ea3f91544ea2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/722f0362-111e-4eb8-ac51-fa8692873475.jpeg?im_w=720"
    ],
    "amenities": [
        {
            "amenityName": "산 전망",
            "icon": "AmenityMountainView"
        },
        {
            "amenityName": "강 전망",
            "icon": "AmenityRiver"
        },
        {
            "amenityName": "무선 인터넷",
            "icon": "AmenityWifi"
        },
        {
            "amenityName": "건물 내 무료 주차",
            "icon": "AmenityParking"
        },
        {
            "amenityName": "세탁기",
            "icon": "AmenityWasher"
        },
        {
            "amenityName": "주방",
            "icon": "AmenityKitchen"
        },
        {
            "amenityName": "업무 전용 공간",
            "icon": "AmenityDesk"
        },
        {
            "amenityName": "50인치TV + 넷플릭스, 일반 케이블 TV",
            "icon": "AmenityTv"
        },
        {
            "amenityName": "에어컨",
            "icon": "AmenityAc"
        },
        {
            "amenityName": "전용 온수 욕조",
            "icon": "AmenityHottub"
        },
        {
            "amenityName": "숙소 내 실외 보안 카메라",
            "icon": "AmenitySecurity"
        }
    ],
    "roomInfo": [],
    "desc": "가족여행시 모두가 만족 할 숙소입니다.\n 건물 뒤로는 산, 앞으로는 1,200평의 넓은 정원과 계곡이 자리하고 있으며 특색있는 외형의 건물에서 자연과 어울어지는 세련됨을 만끽 하실 수 있습니다.\n#경기도건축대상수상 #방송에소개된그집 #서울엔우리집이없다 #스몰웨딩",
    "HostIntro": [
        {
            "category": "LivesIn",
            "text": "거주지: 가평군, 한국"
        }
    ],
    "HostContent": [
        {
            "title": "호스트 상세 정보",
            "body": "응답률 :100%\n1시간 이내에 응답"
        }
    ],
    "Ratings": {
        "Cleanliness": 4.8,
        "Accuracy": 4.8,
        "CheckIn": 5,
        "Communication": 5,
        "Location": 4.8,
        "Value": 4.8
    }
}
 */
