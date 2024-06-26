import Image from 'next/image'
import { FetchApi } from '@/lib/api'

const SleepSpec = async ({ id }) => {
  const roomData = await (await FetchApi(`/rooms/${id}`)).data

  if (!roomData) {
    return <></>
  }

  return (
    <div className='mb-8 w-full'>
      <div className=''>
        <h1 className='mb-8 py-4 text-2xl font-bold'>숙박 장소</h1>
        <div className='flex flex-wrap'>
          {roomData &&
            roomData.roomInfo.map(room => (
              <div key={room.roomId} className='w-full px-2 pb-8 sm:w-1/2 lg:w-1/4'>
                <div className='items-left flex aspect-square h-full w-full flex-col justify-start rounded-lg border p-4 py-4'>
                  <div className='flex items-center pb-4'>
                    {/* 이미지와 텍스트를 동적으로 생성 */}
                    {room.beds.map((bed, index) => (
                      <div key={index} className='flex items-center'>
                        <Image
                          src={
                            bed.bedType === '싱글 침대'
                              ? '/images/singleBed.svg'
                              : '/images/queenBed.svg'
                          }
                          alt={bed.bedType}
                          width={24}
                          height={24}
                          className='pr-1'
                        />
                        {index !== room.beds.length - 1 && <span>,&nbsp;</span>}
                      </div>
                    ))}
                  </div>
                  <h3 className='text-xl font-semibold'>침실 {room.roomId}</h3>
                  {/* 침대 정보 표시 */}
                  {room.beds.map((bed, index) => (
                    <p key={index}>
                      {bed.bedType} {bed.count}개
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SleepSpec
