import React from 'react'
import Translation from '@/components/RoomIntroduce/Translation.jsx'
import IntroduceContent from '@/components/RoomIntroduce/IntroduceContent.jsx'
import { FetchApi } from '@/lib/api'

const RoomIntroduce = async ({ id }) => {
  const roomData = await (await FetchApi(`/rooms/${id}`)).data

  return (
    <div>
      <Translation />
      <IntroduceContent roomData={roomData} />
    </div>
  )
}

export default RoomIntroduce
