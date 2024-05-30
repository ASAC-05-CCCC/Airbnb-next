import React from 'react'
import SimpleInfo from '@/components/RoomInfo/SimpleInfo.jsx'
import RoomHost from '@/components/RoomInfo/RoomHost.jsx'
import InfoDetail from '@/components/RoomInfo/InfoDetail.jsx'

const RoomInfo = () => {
  return (
    <div>
      <SimpleInfo />
      <InfoDetail />
      <RoomHost />
    </div>
  )
}

export default RoomInfo