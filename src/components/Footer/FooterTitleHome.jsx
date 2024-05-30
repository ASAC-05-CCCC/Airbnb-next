import FacebookImage from '/public/images/FacebookImage.jpeg'
import TwitterImage from '/public/images/TwitterImage.jpeg'
import InstargramImage from '/public/images/InstargramImage.jpeg'
import Blog from '/public/images/Blog.jpeg'
import AirbnbApp from '/public/images/AirbnbApp.jpeg'
import Image from 'next/image'

const FooterTitleHome = () => {
  return (
    <>
      <section className='bg-gray-100 text-gray-700 py-8 px-2 sm:px-6 lg:px-8 text-sm'>
        <footer className='max-w-8xl mx-auto'>
          <div className='pl-10 mx-auto  sm:px-6 lg:px-8 '>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                <h3 className='font-bold mb-4'>에어비앤비 지원</h3>
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
                <h3 className='font-bold mb-4'>호스팅</h3>
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
                <h3 className='font-bold mb-4'>에어비앤비</h3>
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
            <div className='border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
              <p className='text-sm text-gray-500'>
                &copy; 2024 Airbnb, Inc. ・ 개인정보 처리방침 ・ 이용약관 ・ 사이트맵 ・ 한국의
                변경된 환불 정책 ・ 회사 세부정보
              </p>
              <div className='flex space-x-4 mt-4 md:mt-0'>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  🌐 한국어 (KR)
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  ₩ KRW
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <Image src={FacebookImage} className='w-6 h-6' alt='FACEBOOK' />
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <Image src={TwitterImage} className='w-6 h-6' alt='TWIITER' />
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <Image src={InstargramImage} className='w-6 h-6' alt='INSTARGRAM' />
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <Image src={Blog} className='w-6 h-6' alt='BLOG' />
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-700'>
                  <Image src={AirbnbApp} className='w-6 h-6' alt='AIRBNB' />
                </a>
              </div>
            </div>

            <div className='text-gray-500 text-xs mt-4 leading-relaxed'>
              <p>
                <span className='border-gray-300 mb-1' />
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
