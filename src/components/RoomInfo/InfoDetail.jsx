import React from 'react';
import Image from 'next/image';

const InfoDetail = () => {
  const features = [
    { icon: "/images/selfCheckIn.svg", text: "셀프 체크인"},
    { icon: "/images/greatLocation.svg", text: "훌륭한 숙소 위치"},
    { icon: "/images/smoothCheckIn.svg", text: "순조로운 체크인 과정"},
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t pt-8 pb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Image src={feature.icon} alt={feature.text} width={16} height={16}  />
          <p className='text-gray-500'>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoDetail;
