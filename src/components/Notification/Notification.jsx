import NotificationHeader from './NotificationHeader.jsx'
import NotificationContents from './NotificationContents.jsx'

const NotificationData = [
  {
    title: '숙소 이용 규칙',
    body: [
      {
        content: '체크인 시간: 오후 3:00~오후 9:00',
      },
      {
        content: '체크아웃 시간: 오전 11:00 전까지',
      },
      {
        content: '게스트 정원 6명',
      },
    ],
    footer: '더 보기',
  },
  {
    title: '안전 및 숙소',
    body: [
      {
        content: '숙소 내 실외 보안 카메라',
      },
      {
        content: '출입이 제한되지 않는 수영장/온수 욕조',
      },
      {
        content: '근처에 호수, 강, 바다 등이 있음',
      },
    ],
    footer: '더 보기',
  },
  {
    title: '환불 정책',
    body: [
      {
        content: '이 숙박에 대한 취소 세부 내역을 확인하려면 여행 날짜를 입력하세요.',
      },
    ],
    footer: '날짜 추가',
  },
]

const Notification = () => {
  return (
    <div className='flex justify-center py-12'>
      <div>
        <NotificationHeader />
        <div className='grid grid-cols-1 flex-wrap mx-2 lg:grid-cols-3'>
          {NotificationData.map(({ title, body, footer }) => {
            return <NotificationContents title={title} body={body} footer={footer} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Notification
