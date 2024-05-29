import React from 'react';
import shareIcon from '../../assets/RoomViewSvg/share.svg';
import saveIcon from '../../assets//RoomViewSvg/store.svg';

const RoomTitle = () => {
  return (
    <div className="w-full mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-end">
        <h1 className="text-3xl font-bold leading-snug  flex-1">
          태안에서 반려견과 함께 즐겁게 보낼 수 있는 위드독 독채 풀빌라(스파, 애견)
        </h1>
        <div className="flex items-center gap-4 justify-end flex-shrink-0 sm:flex-1">
          <button className="flex items-center underline">
            <img src={shareIcon} alt="Share" className="w-3 h-3 mr-1" />
            공유하기
          </button>
          <button className="flex items-center underline">
            <img src={saveIcon} alt="Save" className="w-3 h-3 mr-1" />
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomTitle;
