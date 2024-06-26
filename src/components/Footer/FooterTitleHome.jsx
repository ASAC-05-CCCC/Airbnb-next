const FacebookImage = '/images/FacebookImage.jpeg'
const TwitterImage = '/images/TwitterImage.jpeg'
const InstargramImage = '/images/InstargramImage.jpeg'
const Blog = '/images/Blog.jpeg'
const AirbnbApp = '/images/AirbnbApp.jpeg'
import Image from 'next/image'

const FooterTitleHome = () => {
  return (
    <>
      <section className='bg-gray-100 px-2 py-8 text-sm text-gray-700 sm:px-6 lg:px-8'>
        <footer className='max-w-8xl mx-auto'>
          <div className='mx-auto pl-10  sm:px-6 lg:px-8 '>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              <div>
                <h3 className='mb-4 font-bold'>에어비앤비 지원</h3>
                <ul>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      도움말 센터
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      에어커버
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      차별 반대
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      장애인 지원
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      예약 취소 옵션
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      이웃 민원 신고
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-4 font-bold'>호스팅</h3>
                <ul>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      당신의 공간을 에어비앤비하세요
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      호스트를 위한 에어커버
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      호스팅 자료
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      커뮤니티 포럼
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      책임감 있는 호스팅
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      무료 호스팅 클래스 참여하기
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-4 font-bold'>에어비앤비</h3>
                <ul>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      뉴스룸
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      새로운 기능
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      채용정보
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      투자자 정보
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='hover:underline'>
                      Airbnb 긴급 숙소
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-8 flex flex-col items-center justify-between border-t border-gray-300 pt-8 md:flex-row'>
              <p className='text-sm text-gray-500'>
                &copy; 2024 Airbnb, Inc. ・ 개인정보 처리방침 ・ 이용약관 ・ 사이트맵 ・ 한국의
                변경된 환불 정책 ・ 회사 세부정보
              </p>
              <div className='mt-4 flex space-x-4 md:mt-0'>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  🌐 한국어 (KR)
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  ₩ KRW
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <div className='h-6 w-6'>
                    <Image
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      src={FacebookImage}
                      alt='FACEBOOK'
                    />
                  </div>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <div className='h-6 w-6'>
                    <Image
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      src={TwitterImage}
                      alt='TWIITER'
                    />
                  </div>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <div className='h-6 w-6'>
                    <Image
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      src={InstargramImage}
                      alt='INSTARGRAM'
                    />
                  </div>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <div className='h-6 w-6'>
                    <Image
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      src={Blog}
                      alt='BLOG'
                    />
                  </div>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <div className='h-6 w-6'>
                    <Image
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      src={AirbnbApp}
                      alt='AIRBNB'
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className='mt-4 text-xs leading-relaxed text-gray-500'>
              <p>
                <span className='mb-1 border-gray-300' />
                웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin
                2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT
                번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
                080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매
                중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의
                당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에
                관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default FooterTitleHome
