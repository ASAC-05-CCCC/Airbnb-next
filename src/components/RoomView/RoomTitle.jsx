import React from 'react';
import Image from 'next/image';

const RoomTitle = () => {
  return (
    <div className="w-full mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-end">
        <h1 className="text-3xl font-bold leading-snug  flex-1">
          태안에서 반려견과 함께 즐겁게 보낼 수 있는 위드독 독채 풀빌라(스파, 애견)
        </h1>
        <div className="flex items-center gap-4 justify-end flex-shrink-0 sm:flex-1">
          <button className="flex items-center underline">
            <Image src="/images/share.svg" alt="Share"  width={12} height={12} margin-right={4} />
            공유하기
          </button>
          <button className="flex items-center underline">
            <Image src="/images/store.svg" alt="Save" width={12} height={12} margin-right={4} />
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomTitle;
