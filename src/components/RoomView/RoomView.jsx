import RoomTitle from '@/components/RoomView/RoomTitle.jsx'
import RoomPictures from '@/components/RoomView/RoomPictures.jsx'

const RoomView = ({ roomData }) => {
  return (
    <div>
      <RoomTitle roomData={roomData} />
      <RoomPictures roomData={roomData} />
    </div>
  )
}

export default RoomView
