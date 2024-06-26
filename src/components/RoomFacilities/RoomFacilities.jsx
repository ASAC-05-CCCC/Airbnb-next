'use client'

import { useState } from 'react'
import Image from 'next/image'

const iconMap = {
  AmenityBeach: '/images/beachNear.svg',
  AmenityOceanView: '/images/beachNear.svg',
  AmenityWater: '/images/beachNear.svg',
  AmenityRiverView: '/images/beachNear.svg',
  AmenityRiver: '/images/beachNear.svg',
  AmenityLakeView: '/images/beachNear.svg',
  AmenityWifi: '/images/freeWifi.svg',
  AmenityInternet: '/images/freeWifi.svg',
  AmenitySwimmingPool: '/images/swimming.svg',
  AmenitySwim: '/images/swimming.svg',
  AmenityPublicOutdoorPool: '/images/swimming.svg',
  AmenityWasher: '/images/washer.svg',
  AmenityAc: '/images/airconditioner.svg',
  AmenityFireplace: '/images/insideFire.svg',
  AmenityKitchen: '/images/kitchen.svg',
  AmenityParking: '/images/car.svg',
  AmenityRoadParking: '/images/car.svg',
  AmenityDrier: '/images/dryer.svg',
  AmenityGarden: '/images/backyard.svg',
  AmenityGardenView: '/images/backyard.svg',
  AmenityBackyard: '/images/backyard.svg',
  AmenityHairDryer: '/images/hairDryer.svg',
  AmenityTv: '/images/TV.svg',
  AmenityBreakfast: '/images/breakfast.svg',
  AmenityCo: '/images/COAlarm.svg',
  AmenitySmoke: '/images/COAlarm.svg',
  AmenityPet: '/images/pet.svg',
  AmenityBath: '/images/bath.svg',
  AmenityCamera: '/images/camera.svg',
  AmenityMountain: '/images/mountain.svg',
  AmenityMountainView: '/images/mountain.svg',
  AmenityParkView: '/images/mountain.svg',
  AmenityCctv: '/images/camera.svg',
  AmenitySecurity: '/images/camera.svg',
  AmenitySauna: '/images/bath.svg',
  AmenityPatio: '/images/bath.svg',
  AmenityDesk: '/images/bath.svg',
  AmenityElevator: '/images/bath.svg',
  AmenityHottub: '/images/bath.svg',
  AmenityTub: '/images/bath.svg',
  AmenityYardView: '/images/backyard.svg',
  AmenityFridge: '/images/bath.svg',
  AmenityMicrowave: '/images/camera.svg',
  AmenityKeepingBag: '/images/bath.svg',
  AmenityValleyView: '/images/backyard.svg',
  AmenityJacuzzi: '/images/bath.svg',
  AmenityCityView: '/images/camera.svg',
  AmenityDryer: '/images/washer.svg',
}

const RoomFacilities = ({ roomData, id }) => {
  // const [roomData, setRoomData] = useState(null);
  const [showAllAmenities, setShowAllAmenities] = useState(false)
  // const pathname = usePathname();
  // const id = pathname.slice(7);

  // useEffect(() => {
  //   fetch(`/apis/rooms/${id}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setRoomData(data)
  //   })
  //   .catch(error => console.error('Error fetching room data:', error));
  // }, []);

  if (!roomData) {
    return <></>
  }

  const displayedAmenities = showAllAmenities ? roomData.amenities : roomData.amenities.slice(0, 10)

  return (
    <div className='w-full'>
      <div className='pb-8'>
        <h1 className='pb-8 pt-8 text-2xl font-bold'>숙소 편의시설</h1>
        <div className='-px-2 flex flex-wrap'>
          {displayedAmenities.map((amenity, index) => (
            <div key={index} className='w-full px-2 pb-4 sm:w-1/2'>
              <div className='flex items-center space-x-2'>
                <Image
                  src={iconMap[amenity.icon]}
                  alt={amenity.amenityName}
                  width={24}
                  height={24}
                />
                <span>{amenity.amenityName}</span>
              </div>
            </div>
          ))}
        </div>
        {roomData.amenities.length > 10 && !showAllAmenities && (
          <div className='pt-4'>
            <button className='rounded-lg border px-4 py-2 pb-8 transition hover:bg-gray-100'>
              편의시설 {roomData.amenities.length}개 모두 보기
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoomFacilities
