import { fetchRoomData } from '@/app/apis/reservation/price/fetchRoomsData'
import { NextResponse } from 'next/server'

export async function GET(request, context) {
  const roomDataList = fetchRoomData()

  //요청 받은 url의 request roomId 값을 가져옴
  const roomId = context.params.id

  // roomId에 대한 데이터 객체
  const eachRoom = roomDataList.filter(each => {
    return each.accommodationId === +roomId
  })[0]

  const priceDTO = {
    //
    roomId: eachRoom.accommodationId,
    price: eachRoom.pricePerDay,
  }

  return new NextResponse(JSON.stringify(priceDTO), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
