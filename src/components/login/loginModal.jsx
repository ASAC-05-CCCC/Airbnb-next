import DetailModal from '@/components/common/DetailModal'
import SolidLine from '@/components/login/SolidLine'
import LoginForm from '@/components/login/loginForm'
import LoginHeader from '@/components/login/loginHeader'
import LoginTitle from '@/components/login/loginTitle'
import LoginWrapper from '@/components/login/loginWrapper'
import OAuthLoginButton from '@/components/login/oAuthLoginButton'
import OAuthLoginForm from '@/components/login/oAuthLoginForm'

const oAuthService = [
  {
    name: '네이버',
    image: '',
  },
  {
    name: '페이스북',
    image: '',
  },
  {
    name: '구글',
    image: '',
  },
  {
    name: '애플',
    image: '',
  },
]

export default function LoginModal({ closeLoginModal }) {
  return (
    <DetailModal>
      <LoginWrapper>
        <LoginHeader closeLoginModal={closeLoginModal} />
        <div className='flex w-full flex-col items-center justify-center overflow-auto py-4'>
          <LoginTitle />
          <LoginForm />
          <SolidLine />
          <OAuthLoginForm>
            {oAuthService.map((each, index) => {
              return <OAuthLoginButton key={index} service={each} />
            })}
          </OAuthLoginForm>
        </div>
      </LoginWrapper>
    </DetailModal>
  )
}
