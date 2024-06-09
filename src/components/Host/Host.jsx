'use client'
import HostHeader from '@/components/Host/HostHeader.jsx'
import HostIntro from '@/components/Host/HostIntro.jsx'
import HostContent from '@/components/Host/HostContent.jsx'
import HostMessageButton from '@/components/Host/HostMessageButton.jsx'
import HostFooter from '@/components/Host/HostFooter.jsx'
import HostProfile from '@/components/Host/HostProfile.jsx'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const GenerateHostData = data => {
  return {
    name: data.hostName,
    superHost: data.guestFavorite,
    review: data.reviewCount,
    rating: data.rating,
    career: data.hostSince,
  }
}

const GenerateHostIntroData = data => {
  return data.HostIntro
}

const GenerateHostContentData = data => {
  return data.HostContent
}

const Host = () => {
  const [hostData, setHostData] = useState([])
  const [hostIntroData, setHostIntroData] = useState([])
  const [hostContentData, setHostContentData] = useState([])
  const pathname = usePathname()
  const id = pathname.slice(7)

  useEffect(() => {
    fetch(`/apis/host/${id}`)
      .then(response => response.json())
      .then(data => {
        // @ts-ignore
        setHostData(GenerateHostData(data))
        setHostIntroData(GenerateHostIntroData(data))
        setHostContentData(GenerateHostContentData(data))
      })
      .catch(error => console.error('Error fetching host.json:', error))
  }, [])

  if (!hostData || hostData.length === 0) {
    return <></>
  }

  return (
    <div className='w-full flex-col items-center justify-center px-10'>
      <div className='w-full flex-col'>
        <div>
          <HostHeader />
        </div>
        <div className='mx-auto flex flex-auto items-center justify-center rounded-2xl bg-hostColor'>
          <div className='w-full pb-6 pt-10'>
            <div className='flex flex-col items-center justify-start gap-8 px-20 lg:flex-row lg:gap-12 lg:px-10'>
              <div className='flex flex-col lg:gap-8 '>
                {hostData && (
                  <HostProfile
                    name={hostData.name}
                    superHost={hostData.superHost}
                    review={hostData.review}
                    rating={hostData.rating}
                    career={hostData.career}
                  />
                )}
                <div className='mt-4 flex w-[341px] flex-col gap-4 lg:mt-0'>
                  {hostIntroData.length > 0 &&
                    hostIntroData.map(({ category, text }, index) => {
                      if (index > 1) {
                        return null
                      }
                      return (
                        <HostIntro category={category} text={text} key={`${category}-${index}`} />
                      )
                    })}
                </div>
              </div>
              <div className='flex w-[341px] flex-col gap-8 lg:w-2/3 lg:gap-8 '>
                {hostContentData.length > 0 &&
                  hostContentData.map(({ title, body }, index) => {
                    return <HostContent title={title} body={body} key={`${title}-${index}`} />
                  })}
                <HostMessageButton />
                <HostFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Host
