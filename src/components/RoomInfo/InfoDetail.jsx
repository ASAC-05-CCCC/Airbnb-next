import React from 'react';
import selfCheckIn from '../../assets/RoomInfoSvg/selfCheckIn.svg';
import greatLocation from '../../assets/RoomInfoSvg/greatLocation.svg';
import smoothCheckIn from '../../assets/RoomInfoSvg/smoothCheckIn.svg';

const InfoDetail = () => {
  const features = [
    { icon: selfCheckIn, text: "셀프 체크인"},
    { icon: greatLocation, text: "훌륭한 숙소 위치"},
    { icon: smoothCheckIn, text: "순조로운 체크인 과정"},
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t pt-8 pb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2">
          <img src={feature.icon} alt={feature.text} className="w-4 h-4" />
          <p className='text-gray-500'>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoDetail;
