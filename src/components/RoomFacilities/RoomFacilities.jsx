'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const iconMap = {
  AmenityBeach: "/images/beachNear.svg",
  AmenityWifi: "/images/freeWifi.svg",
  AmenitySwimmingPool: "/images/swimming.svg",
  AmenityWasher: "/images/washer.svg",
  AmenityAc: "/images/airconditioner.svg",
  AmenityFireplace: "/images/insideFire.svg",
  AmenityKitchen: "/images/kitchen.svg",
  AmenityParking: "/images/car.svg",
  AmenityDrier: "/images/dryer.svg",
  AmenityGarden: "/images/backyard.svg",
  AmenityHairDryer: "/images/hairDryer.svg",
  AmenityTv: "/images/TV.svg",
  AmenityBreakfast: "/images/breakfast.svg",
  AmenityCo: "/images/COAlarm.svg",
  AmenityPet: "/images/pet.svg",
  AmenityBath: "/images/bath.svg",
  AmenityCamera: "/images/camera.svg",
  AmenityMountain: "/images/mountain.svg",
  AmenityCctv: "/images/camera.svg",
  AmenitySauna: "/images/bath.svg",
};

const RoomFacilities = () => {
  const [roomData, setRoomData] = useState(null);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const pathname = usePathname();
  const id = pathname.slice(7);

  useEffect(() => {
    fetch(`/apis/rooms/${id}`)
    .then(response => response.json())
    .then(data => {
      setRoomData(data)
    })
    .catch(error => console.error('Error fetching room data:', error));
  }, []);

  if (!roomData) {
    return (
      <></>
    );
  }
  
  const displayedAmenities = showAllAmenities ? roomData.amenities : roomData.amenities.slice(0, 10);

  return (
    <div className="w-full">
      <div className='pb-8'>
        <h1 className="text-2xl font-bold pb-8 pt-8">숙소 편의시설</h1>
            <div className="flex flex-wrap -px-2">
              {displayedAmenities.map((amenity, index) => (
                <div key={index} className="w-full sm:w-1/2 px-2 pb-4">
                  <div className="flex items-center space-x-2">
                    <Image src={iconMap[amenity.icon]} alt={amenity.amenityName} width={24} height={24} />
                    <span>{amenity.amenityName}</span>
                  </div>
                </div>
              ))}
            </div>
            {roomData.amenities.length > 10 && !showAllAmenities && (
              <div className="pt-4">
                <button
                  className="border py-2 px-4 rounded-lg hover:bg-gray-100 transition pb-8"
                >
                  편의시설 {roomData.amenities.length}개 모두 보기
                </button>
              </div>
            )}
      </div>
    </div>
  );
}

export default RoomFacilities;
